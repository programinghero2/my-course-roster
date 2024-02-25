import { useEffect } from "react";
import { useState } from "react";
import Card from "../card/Card";

const Cards = ({handleCarts}) => {
    const [cards,setCards] = useState([])
    useEffect(() => {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className=" lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                cards.map((card,idx) => <Card handleCarts={handleCarts} key={idx}  card={card} />)
            }
        </div>
    );
};

export default Cards;