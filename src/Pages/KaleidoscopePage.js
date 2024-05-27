import { useEffect, useState, useRef} from "react";
import { render, createPortal } from "react-dom";
const  KaleidoscopePage = (props) => {
    let externalWindows = []
    const [container, setContainer] = useState(null);
    const newWindow = useRef(null);
    const requestRef = useRef();
    const positionRef = useRef([0, 0]);
    const speedRef = useRef([0, 0])

    useEffect(()=>{
        positionRef.current = props.startPosition;
        setContainer(document.createElement("div"));
        speedRef.current[0] = Math.random() * 10.0 * props.speedRun;
        speedRef.current[1] = Math.random() * 10.0 * props.speedRun;



        props.setVideoLoaded(prevState => {
            console.log("READOING")
            return !prevState;
        })

    }, [])


    useEffect(() => {
        if(container) {
            /*
            for(let i = 0; i < 5; i++) {
            }
            */
            newWindow.current = window.open(
                "",
                "",
                "width=600,height=400,left=200,top=200"
              );
              // Append container
              newWindow.current.document.body.appendChild(container);
              
              // Save reference to window for cleanup
              const curWindow = newWindow.current;
        
              // Return cleanup function
              return () => curWindow.close();

            /*
              
            for(let i = 0; i < 5; i++) {
                externalWindows.push(window.open('', '', 'width=100,height=400,left='  + i * 100 +  ',top=200'));
                var z = document.createElement('div');
                z.innerHTML = 'test'
                externalWindows[i].document.body.appendChild(z)
            }

            return ()=>{
                for(let i = 0; i < externalWindows.length; i++) {
                    externalWindows[i].close();
                }
            }
            */
           
        }
    }, [container]);


    const animate = time => {
        // The 'state' will always be the initial value here
        requestRef.current = requestAnimationFrame(animate);
        let timePosition = time * 0.001 * 100;

        

        if (newWindow.current) {
            newWindow.current.moveTo(positionRef.current[0], positionRef.current[1]);

          //positionRef.current[0] = timePosition;
          positionRef.current[0] += speedRef.current[0];
          positionRef.current[1] += speedRef.current[1];

          if(positionRef.current[0] >= 1920-newWindow.current.innerWidth || positionRef.current[0] <= 0) {
            speedRef.current[0] *= -1;
          }
          if(positionRef.current[1] >= 1080-newWindow.current.innerHeight || positionRef.current[1] <= 0) {
            speedRef.current[1] *= -1;

          }
        }          

      }


    useEffect(()=> {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);

    })
    /*
    useEffect(() => {
        // Move the window after 3 seconds
        const timeout = setTimeout(() => {

            if (newWindow.current) {
                newWindow.current.moveTo(400, 300);
              }          
        }, 3000);

        return () => clearTimeout(timeout);
      }, []);
    */
    

    return container && createPortal(  <div>
        {props.children}
        </div>
    , container);
}

export default KaleidoscopePage