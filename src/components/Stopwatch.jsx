import { useState, useEffect } from "react"
import { FaPlay, FaPause, FaSquare } from "react-icons/fa"
function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    const handlePlay = () => {
        setRunning(prevState => !prevState);

    }

    const handleReset = () => {
        setRunning("reset");

    }

    useEffect(() => {
        let interval;
        if (running === "reset") {
            setTime(0);
            console.log(running)
            setRunning(false);
            return clearInterval(interval);
        } else if (running) {
            interval = setInterval(() => {
                setTime((prevState) => prevState + 10);
                console.log(interval)
            }, 10)
        }

        return () => clearInterval(interval);
    }, [running])




    return <div className="stopwatch-body">
        <div className="stopwatch-container">
            <h1 className="stopwatch-header">Stop watch</h1>

            <div className="stopwatch-feature">
                <div className="stopwatch-time">
                    <h1> <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span></h1>
                </div>

                <div className="btn-bar">
                    {!running ? <FaPlay className="btn" onClick={handlePlay} /> : <FaPause className="btn" onClick={handlePlay} />}
                    <FaSquare className="btn" onClick={handleReset} />
                </div>
            </div>

        </div>
    </div>
}

export default Stopwatch;