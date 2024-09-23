import { useEffect, useState } from "react";

const useTrend = () => { 
    const [trend, setTrend] = useState([]);
    useEffect(() => {
        fetch('./trending.json')
        .then(res => res.json())
        .then(data => setTrend(data))
    }, []);
    console.log(trend);
    return trend;
};

export default useTrend;