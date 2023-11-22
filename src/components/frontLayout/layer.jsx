import { Link } from "react-router-dom";

const MainLayer = () => {
    const gradient = {
        background: "radial-gradient(circle, #0C6A93, #012841)",
        width: "100%",
        height: "550px",
    }
    const position = {
        position: "relative",
        top: "30px",
        right: "60px"
    }

    const textPosition = {
        position: "relative",
        top: "90px",
        left: "140px",
        lineHeight: "1",
        fontWeight: "700",
        fontFamily: 'Poppins, sans-serif',
        fontSize: "80px"
    }

    const pText = {
        position: "relative",
        top: "40px",
        left: '95px',
        fontFamily: 'Poppins, sans-serif',
        margin: "50px",
        fontSize: "15px",
    }
    const button = {
        position: "relative",
        top: "-5px",
        left: '160px',
        fontFamily: 'Poppins, sans-serif',
        fontSize: "15px",
    }

    return (
        <div className="w3-container" style={gradient}>
            <div className="w3-container"  >
                <img
                    style={position}
                    src="/public/images/Pizza.png"
                    alt="Pizza"
                    className="w3-right w3-margin w3-padding"
                    height="500"
                    width="500"
                />
                <div className="">
                    <h1 className="w3-text-white w3-padding" style={textPosition} >Enj<Link to='' className="w3-text-deep-red w3-text-none">o</Link>y the <br />
                        Best Pizza
                    </h1>
                    <p className="w3-text-white w3-padding" style={pText}>Original Recipe Pizza and plenty of it. <br />
                        Sometimes thats all you need to turn an average day in to a <br /> great one.
                    </p>
                    <button className="w3-btn w3-deep-red w3-large w3-round-xlarge" style={button}><b>Order now</b></button>
                </div>
            </div>
        </div>
    );
}

export default MainLayer;