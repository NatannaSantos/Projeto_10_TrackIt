import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
export default function ButtonToday(){

    const percentage = 66;

    <CircularProgressbar value={percentage} text={`Hoje`} background backgroundPadding={6} styles={buildStyles({
        backgroundColor: "#3e98c7",
        textColor: "#fff",
        pathColor: "#fff",
        trailColor: "transparent"
    })}
/>
}