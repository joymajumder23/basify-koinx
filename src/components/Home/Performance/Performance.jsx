import { FaExclamationCircle } from "react-icons/fa";

const Performance = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Performance</h1>
            <div className="flex gap-2">
                <p className="text-slate-600">Today's Low <br /> <span>46,930.22</span></p>
                <input type="range" min={0} max="100" value="80" className="range [--range-shdw:transparent] bg-gradient-to-r from-[#FF4949] from-10% via-[#C2CB21] via-30% to-[#11EB68] to-90%" />
                <p className="text-slate-600">Today's High <br /> <span>49,743.83</span></p>
            </div>
            <div className="flex gap-2">
                <p className="text-slate-600">52W Low <br /> <span>46,930.22</span></p>
                <input type="range" min={0} max="100" value="0" className="range [--range-shdw:transparent] bg-gradient-to-r from-[#FF4949] from-10% via-[#C2CB21] via-30% to-[#11EB68] to-90%" />
                <p className="text-slate-600">52W High <br /> <span>49,743.83</span></p>
            </div>


            <section>
                <h1 className="flex gap-2 items-center text-xl font-bold">Fundamentals <span className="text-slate-400"><FaExclamationCircle></FaExclamationCircle></span></h1>
            <div className="flex gap-12 items-center">
                <div>
                    <div className="flex gap-2 justify-between items-center border-b py-4">
                        <p className="text-sm text-slate-400">Bitcoin</p>
                        <p className="text-sm font-semibold">$16,815.46</p>
                    </div>
                    <div className="flex gap-2 justify-between items-center border-b py-4">
                        <p className="text-sm text-slate-400">24h Low / 24h High</p>
                        <p className="text-sm font-semibold">$16,382.07 / $16,874.12</p>
                    </div>
                    <div className="flex gap-2 justify-between items-center border-b py-4">
                        <p className="text-sm text-slate-400">7d Low / 7d High</p>
                        <p className="text-sm font-semibold">$16,382.07 / $16,874.12</p>
                    </div>
                    <div className="flex gap-2 justify-between items-center border-b py-4">
                        <p className="text-sm text-slate-400">Trading Volume</p>
                        <p className="text-sm font-semibold">$23,249,202,782</p>
                    </div>
                    <div className="flex gap-2 justify-between items-center border-b py-4">
                        <p className="text-sm text-slate-400">Market Cap Rank</p>
                        <p className="text-sm font-semibold">#1</p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 justify-between items-center border-b py-4">
                        <p className="text-sm text-slate-400">Market Cap</p>
                        <p className="text-sm font-semibold">$323,507,290,047</p>
                    </div>
                    <div className="flex gap-2 justify-between items-center border-b py-4">
                        <p className="text-sm text-slate-400">Market Cap Dominance</p>
                        <p className="text-sm font-semibold">38.343%</p>
                    </div>
                    <div className="flex gap-2 justify-between items-center border-b py-4">
                        <p className="text-sm text-slate-400">Volume / Market Cap</p>
                        <p className="text-sm font-semibold">0.0718</p>
                    </div>
                    <div className="flex gap-2 justify-between items-center border-b py-4">
                        <p className="text-sm text-slate-400">All-Time High</p>
                        <div className="text-end">
                        <p className="text-sm font-semibold">$69,044.77 <span className="text-sm text-red-500">-75.6%</span></p>
                        <p className="text-sm font-semibold">Nov 10, 2021 (about 1 year)</p>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-between items-center border-b py-4">
                        <p className="text-sm text-slate-400">All-Time Low</p>
                        <div className="text-end">
                        <p className="text-sm font-semibold">$67.81 <span className="text-sm text-green-500">24729.1%</span></p>
                        <p className="text-sm font-semibold">Jul 06, 2013 (over 9 years)</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>

        </div>
    );
};

export default Performance;