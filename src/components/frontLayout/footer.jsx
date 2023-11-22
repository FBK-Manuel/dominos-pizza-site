import { Link } from "react-router-dom"


const Footer = () => {

    const footer = {
        background: "hsla(0, 0%, 0%, 0.5)", /* Black background with 50% transparency */
        width: "100%",
        height: "400px",
        position: "relative",
        top: "-1455px",
    }
    const finalFooter = {
        background: "black",
        position: "relative",
        top: "-1460px",
        width: "100%",
        height: "400px",
        overflow: "hidden",
    }

    const spaces = {
        position: "relative",
        display: "inline-block",
        left: "150px",
        top: "10px",
        padding: "40px",
        fontFamily: 'Poppins, sans-serif',
    }

    const bal = {
        position: "relative",
        top: "-55px",
        fontFamily: 'Poppins, sans-serif',

    }
    const bals = {
        position: "relative",
        top: "-20px",
        fontFamily: 'Poppins, sans-serif',
    }
    const copyright = "Copyright &copy; Domino's All Rights Received.";
    const product = "All of our products have HALAL Certificate from TSE."

    const last = {
        position: "relative",
        left: "150px",
        display: "inline-block",
        padding: "40px",
        fontFamily: 'Poppins, sans-serif',
    }
    return (
        <div>
            <div style={footer}>
                <div className="">
                    <div className="w3-container" style={spaces}>
                        <h2 style={{ fontFamily: 'Poppins, sans-serif', }} className="w3-text-white" >ABOUT</h2>
                        <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Contact Us</Link> <br />
                        <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Legal</Link><br />
                        <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Tracking Tags</Link><br />
                        <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Privacy</Link><br />
                    </div>
                    <div className="" style={spaces}>
                        <h2 className="w3-text-white"></h2>
                        <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Franchising</Link><br />
                        <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Responsibility</Link><br />
                        <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Home Dominos <br /> make pizzas</Link>

                    </div>
                    <div className="" style={spaces}>
                        <div style={bal}>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif', }} className="w3-text-white">SITE MAP</h2>
                            <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Home</Link><br />
                            <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Store Locator</Link><br />
                        </div>
                    </div>
                    <div className="" style={spaces}>
                        <div style={bals}>
                            <h2 style={{ fontFamily: 'Poppins, sans-serif', }} className="w3-text-white">NUTRITION</h2>
                            <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Nitrition Guide</Link><br />
                            <Link to="" className="w3-text-none w3-text-white" style={{ lineHeight: 2, fontFamily: 'Poppins, sans-serif', }}>Food Allergies And <br /> Sensitivities</Link>
                        </div>
                    </div>

                </div>
                <div >
                    <p style={last} className="w3-text-white w3-small">{copyright}</p>
                    <p style={last} className="w3-text-white w3-small">{product}</p>
                </div>
            </div>
            <div style={finalFooter}></div>
        </div>
    )
}

export default Footer
