import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
const Cards = () => {
    return (
        <div className="md:flex gap-4">
            <div className="card bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] w-96 shadow-xl">
                <div className="flex gap-6 p-3">
                    <img
                        src={img1}
                        alt="Shoes"
                        className="w-32 rounded-xl" />
                    <div>
                    <h2 className="card-title text-white mb-3">Calculate your Profits</h2>
                    <div className="card-actions">
                        <button className="btn bg-white text-black">Check Now <FaArrowRight></FaArrowRight></button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card bg-gradient-to-r from-[#FF9865] to-[#EF3031] w-96 shadow-xl">
                <div className="flex gap-6 p-3">
                    <img
                        src={img2}
                        alt="Shoes"
                        className="w-32 rounded-xl" />
                    <div>
                    <h2 className="card-title text-white mb-3">Calculate your tax liability</h2>
                    <div className="card-actions">
                        <button className="btn bg-white text-black">Check Now <FaArrowRight></FaArrowRight></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;