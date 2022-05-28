import { useParams } from "react-router-dom"
import Stopwatch from "../components/Stopwatch";
function Application() {
    const params = useParams();

    return params.appName === "stopwatch" && <Stopwatch />
}

export default Application;