import Slider from "../../Layouts/Slider/Slider";

const Sentiment = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Sentiment</h1>
            <p className="text-slate-400 font-bold">Key Events</p>
            <div className="w-[700px] p-6">
                <Slider></Slider>
            </div>
            <p className="text-slate-400 font-bold">Analyst Estimates</p>
            <div className="flex justify-between items-center gap-2">
                <p className="bg-[#EBF9F4] text-4xl text-[#0FBA83] font-semibold p-6 rounded-full">76%</p>
                <div>
                    <p>Buy</p>
                    <p>Hold</p>
                    <p>Sell</p>
                </div>
                <div className="w-full">
                    <div className="flex gap-1 items-center">
                        <progress className="progress progress-success w-full" style={{ "--value": 76 }} value={76} max="100"></progress>
                        <p>76%</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <progress className="progress progress-accent w-full" style={{ "--value": 8 }} value={8} max="100"></progress>
                        <p>8%</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <progress className="progress progress-error w-full" style={{ "--value": 16 }} value={16} max="100"></progress>
                        <p>16%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sentiment;