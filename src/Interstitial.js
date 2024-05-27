import "./Interstitial.css"


export default function Interstitial(props) {
    
    return(<>
        <div className="interstitial">
            <div className="interstitial-container">
                {props.children}
            </div>
            
            <button onClick={props.goLeft}>
                <img src = "icon/rightArrow.svg"/>
            </button>

        </div>
        </>

    )
}
