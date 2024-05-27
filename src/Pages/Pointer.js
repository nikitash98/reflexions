import { useRef } from "react"

export default function Pointer(props) {
    const vidRef = useRef();


    const videoEnded = () => {
        props.goLeft();
    }

    return (
        <>
            <div className='OverlayVideo pointerVideo'>
                    <video width="1920" height="1080"  playsinline muted
                    ref = {vidRef}
                    onEnded={videoEnded}>
                    <source src="Videos/Pointer.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="question">

            <h1> Are things in the web tangible?</h1>
            </div>

            <div className="pointer_input">

            <label>Yes</label>
            <br/>
            <input 
                    type="radio"
                    name="option"
                    onChange={() => {vidRef.current.play()}}
            />
            </div>


        </>
    )

}