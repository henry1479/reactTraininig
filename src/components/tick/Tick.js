import { useState,useEffect} from "react";


// компонент выводит часы в реальном времени
export const Tick = () => {
    const [tick, setTick] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(()=>{setTick(new Date())},1000)
        return  () => {
            clearInterval(intervalId);
        }
        
    }, [])

    return(<div>
    <h1>Hello,world</h1>
    <h2>It is {tick.toLocaleTimeString()}.</h2>
    </div>)
}

