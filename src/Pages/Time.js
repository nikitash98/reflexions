import { useRef, useState } from "react"
import Survey from "../Survey";
import useMousePosition from "../Components/useMousePosition";
export default function Time(props) {
    const vidRef = useRef();
    const [wait, setWait] = useState(false);

    const mousePosition = useMousePosition();
    const onAnswer = () => {
        vidRef.current.play();
        setWait(true);
    }

    const videoEnded = () => {
        props.goLeft();
    }

    return (
        <>
        <div className="timeBox">

        <div className={wait?"timeContainer timeClicked":"timeContainer "}>

            <Survey question = {"I have spent too much of my life online."} goLeft = {onAnswer}/>
            <div className='OverlayVideo' style={{"left": mousePosition.x - 200, "top": mousePosition.y - 50, "display": "none"}}>
                    <video width="1920" height="1080"  playsinline muted
                    ref = {vidRef}
                    onEnded={videoEnded}>
                    <source src="Videos/RotatingLoadingScreen.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        </div>


        </>
        
    )

}