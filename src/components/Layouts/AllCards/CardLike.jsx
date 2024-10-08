const CardLike = ({data}) => {
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl p-6 flex-grow border-2">
            <div className="">
                <img src={data.item.small} alt="" />
                    <h2 className="card-title">
                       {data.item.name}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <h1 className="text-xl font-bold">{data.item.data.price}</h1>
                </div>
                <figure>
                    <img
                        src={data.item.data.sparkline}
                        alt="" />
                </figure>
            </div>
        </div>
    );
};

export default CardLike;