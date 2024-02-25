import { useState } from 'react'
import './App.css'
import Cards from './component/cards/Cards'
import Carts from './component/carts/Carts'
import Swal from 'sweetalert2'

function App() {
  const [carts, setCarts] = useState([])
  const [creditTime, setCreditTime] = useState(0)
  const [remainingTime, setRemainingTime] = useState(0)
  const [totalPrice,setTotalPrice] = useState(0)
  const handleCarts = (cart) => {
    const newCarts = [...carts, cart]
    const dulicateDetect = carts.find(item => item.id === cart.id);
    const newCredit = creditTime + cart.course_credit;
    const newRemainingTime = 20 - newCredit;
    if (dulicateDetect) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Multiple course select is not allow',
      })
    }
    else {
      if (newCredit <= 20) {
        setCarts(newCarts)
        setCreditTime(newCredit)
        setTotalPrice(totalPrice + cart.course_price)
      }
      if (newRemainingTime < 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'remaining credit hour get minus value',
        })
      }
      else {
        setRemainingTime(newRemainingTime)
      }
    }
    if (newCredit > 20) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Total Credit is not allow upper than twenty!',
      })
    }

  }
  return (
    <div className='bg-[#F3F3F3]'>
      <h1 className='text-4xl font-bold text-center py-10'>Course Registration</h1>
      <div className='flex flex-col-reverse  lg:flex lg:flex-row gap-5 w-11/12 mx-auto'>
        <Cards handleCarts={handleCarts} />
        <div className=' bg-base-100 p-2'>
          <h1 className='mb-4 text-[#2F80ED] text-[18px] font-bold'>Credit Hour Remaining:{remainingTime}hr</h1>
          <hr />
          <h1 className='text-[20px] font-bold mb-4 mt-4'>Course Name</h1>
          <ul className='list-decimal ml-4 '>
            {
              carts.map((cart, idx) => <Carts cart={cart} key={idx} />)
            }
          </ul>
          <hr className='mt-5' />
          <h1 className='text-[#1c1b1b99] text-[18px] mt-4 mb-4'>Total Credit Hour: {creditTime}</h1>
          <hr />
          <h1 className='text-[#00000099] text-[20px] mt-4 mb-4'>Total Price: {totalPrice} USD</h1>
        </div>
      </div>
    </div>
  )
}
export default App
