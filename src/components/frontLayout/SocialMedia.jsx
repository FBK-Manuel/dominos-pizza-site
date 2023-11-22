import { Link } from "react-router-dom"


const SocialMedia = () => {

    const bgcolor = {
        background: "#ECF9FF",
        width: "100%",
        height: "1300px",
    }
    const social = {
        position: "relative",
        width: "50px",
        height: "50px",
        top: "60px",
        left: "200px",
        paddingTop: "200px",
        fontFamily: 'Poppins, sans-serif',
        fontWeight: "bolder",
        fontSize: "80px"
    }

    const handles = {
        background: "white",
        width: "200px",
        height: "150px",
        borderRadius: "20px",
        left: "150px",
        display: "inline-block",
        position: "relative",
        top: "230px",

        margin: "50px"
    }
    const con = {
        position: "relative",
        top: "-40px",
        left: "20px"
    }

    const socialHandles = {
        position: "relative",
        width: "60px",
        height: "60px",
        top: "-25px",
        left: "10px",

    }
    return (
        <div>
            <div className="" style={bgcolor}>
                <h2 className="w3-text-gray" style={social}>
                    SOCIAL
                </h2>
                <div style={handles}>
                    <img style={socialHandles} src="/images/Frame 20.png" alt="x.com" />
                    <div style={con}>
                        <h4 className="w3-text-grey"><b>Manuel</b></h4>
                        <p className="w3-small w3-text-grey" style={{ lineHeight: "1", fontFamily: 'Poppins, sans-serif', }}><Link className="w3-text-blue w3-text-none" to="">@dominos</Link> Lorem <br /> ipsum dolor sit amet, consecteturadipisicing</p>
                    </div>
                </div>
                <div style={handles}>
                    <img style={socialHandles} src="/images/Frame 20-1.png" alt="x.com" />
                    <div style={con}>
                        <h4 className="w3-text-grey"><b>Cheta</b></h4>
                        <p className="w3-small w3-text-grey" style={{ lineHeight: "1", fontFamily: 'Poppins, sans-serif', }}><Link className="w3-text-blue w3-text-none" to="">@dominos</Link> Lorem <br /> ipsum dolor sit amet, consecteturadipisicing</p>
                    </div>
                </div>
                <div style={handles}>
                    <img style={socialHandles} src="/images/Frame 20-2.png" alt="x.com" />
                    <div style={con}>
                        <h4 className="w3-text-grey"><b>Leo</b></h4>
                        <p className="w3-small w3-text-grey" style={{ lineHeight: "1", fontFamily: 'Poppins, sans-serif', }}><Link className="w3-text-blue w3-text-none" to="">@dominos</Link> Lorem <br /> ipsum dolor sit amet, consecteturadipisicing</p>
                    </div>
                </div>
                <div style={handles}>
                    <img style={socialHandles} src="/images/Frame 20-3.png" alt="x.com" />
                    <div style={con}>
                        <h4 className="w3-text-grey"><b>Dave</b></h4>
                        <p className="w3-small w3-text-grey" style={{ lineHeight: "1", fontFamily: 'Poppins, sans-serif', }}><Link className="w3-text-blue w3-text-none" to="">@dominos</Link> Lorem <br /> ipsum dolor sit amet, consecteturadipisicing</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SocialMedia
