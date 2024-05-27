import "./Homepage.css"
export default function HomePage(props) {

    const startGame = () => {
        props.goLeft()
        console.log("RUNNING THING")
        fetch('/runid/', {
            method: "GET",
            headers: {
              'Content-Type': 'application/json'
            }
         }).then((response) => {
            const data = response.json().then((abc) => {
                console.log(abc)
                props.setID(abc.runid + 1)
            });
        })

    }
    let ageArray = Array(100).fill(1).map((n, i) => n + i);
    return (
        <>
            <div className="titleSegment">

            <h1>
                self survey
            </h1>
            </div>

            <br/>
            <div className="introductionSegment">

                <h2>
                    who are you?
                </h2>
                <div>
                    My name is <input type="text" id="uname" name="name" onChange={(e) => {props.setName(e.target.value)}}/>
                    &nbsp;and I am &nbsp;
                    <select id="age" name="age"
                    onChange={(e) => {props.setAge(e.target.value)}}>
                        {ageArray.map((e, i) => {
                            return(

                            <option value={"" + e} >{e}</option>
                        )

                        })}
                    </select>
                    &nbsp; years old
                    <br/>

                </div>

            </div>

            <div className="enterSegment">
                <button onClick={startGame}>Enter</button>
            </div>


        </>

    )
}