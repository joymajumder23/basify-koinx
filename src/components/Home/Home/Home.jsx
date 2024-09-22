import { IoMdArrowDropup } from "react-icons/io";
import icon1 from "../../../assets/images/icon2.png";
import icon2 from "../../../assets/images/icon6.png";
import icon3 from "../../../assets/images/icon3.png";
import icon4 from "../../../assets/images/icon1.png";
const Home = () => {
    return (
        <div className="mx-auto max-w-screen-xl">
            <div className="flex justify-between">
                <div>
                    <h3 className="flex items-center gap-2 text-2xl font-semibold"><img className="w-9" src={icon1} alt="" />Bitcoin <span className="text-slate-400">BTC</span></h3>
                </div>
                <div>
                    <div className="bg-[#0052FE] px-8 py-4 rounded-2xl w-[426px] h-[515px]flex justify-center text-center space-y-6">
                        <div className="space-y-3">
                            <h1 className="text-white text-2xl font-bold">Get Started with KoinX <br /> for FREE</h1>
                            <p className="text-white">With our range of features that you can equip for free,
                                KoinX allows you to be more educated and aware of your tax reports.</p>
                        </div>
                        <div className="flex justify-center">
                            <img className="w-36 h-40" src={icon2} alt="" />
                        </div>
                        <button className="btn bg-white">Get Started for FREE</button>
                    </div>
                    <div>
                        <h1>Trending Coins (24h)</h1>
                        <div className="flex gap-36 items-center">
                            <div className="space-y-4">
                                <div className="flex items-center gap-1">
                                    <img className="w-6" src={icon3} alt="" />
                                    <h2>Ethereum(ETH)</h2>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img className="w-6" src={icon1} alt="" />
                                    <h2>Bitcoin (BTC)</h2>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img className="w-6" src={icon4} alt="" />
                                    <h2>Polygon (MATIC)</h2>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-[#14B079] bg-[#EBF9F4] flex items-center px-2"><IoMdArrowDropup></IoMdArrowDropup> <span>8.21%</span></p>
                                <p className="text-[#14B079] bg-[#EBF9F4] flex items-center px-2"><IoMdArrowDropup></IoMdArrowDropup> <span>5.26%</span></p>
                                <p className="text-[#14B079] bg-[#EBF9F4] flex items-center px-2"><IoMdArrowDropup></IoMdArrowDropup> <span>4.32%</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;