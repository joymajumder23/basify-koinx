
const TrendCard = ({data}) => {
    return (
        <div>
           <div className="card bg-base-100 w-full shadow-xl p-6 flex-grow border-2">
            <div className="">
                <img src={data.thumb} alt="" />
                    <h2 className="card-title">
                       {data.name}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <h1 className="text-xl font-bold">{data.data.price}</h1>
                </div>
                <figure>
                    <img
                        src={data.data.sparkline}
                        alt="Shoes" />
                </figure>
            </div> 
        </div>
    );
};

export default TrendCard;