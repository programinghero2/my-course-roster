import creditImg from "../../assets/credit.svg"
import { FiDollarSign } from 'react-icons/fi';
const Card = ({ card,handleCarts}) => {
    const { course_img, course_name, course_price, course_credit,course_descriptation } = card
    return (
        <div className="card card-compact  bg-base-100 ">
            <figure><img className="w-full" src={course_img} alt="course image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[18px]">{course_name}</h2>
                <p className="mb-3">{course_descriptation}</p>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <p className="text-2xl"><FiDollarSign></FiDollarSign></p>
                        <p className="text-[#1c1b1b99] text-[18px]">Price:{course_price}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img className="" src={creditImg} alt="" />
                        <p className="text-[#1c1b1b99] text-[18px]">Credit:{course_credit}hr</p>
                    </div>
                </div>
                <div className="card-actions mt-5">
                    <button onClick={() => handleCarts(card)} className="btn text-white btn-sm bg-[#2F80ED] hover:bg-[#2F80ED] w-full">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;