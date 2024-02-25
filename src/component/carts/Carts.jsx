const Carts = ({ cart }) => {
    const { course_name } = cart
    return (
        <li className="text-[#1c1b1b99] text-[18px]">{course_name}</li>
    );
};

export default Carts;