

const FooterContact = () => {
    const background = {
        position: "relative",
        top: "-570px",
        background: "hsla(0, 0%, 100%, 0.5)",
        width: "100%",
        height: "120px",
        zIndex: 1,
    }

    const domino = {
        position: "relative",
        left: "200px",
        top: "25px",
    }
    const whatsappNum = {
        display: "inline-block",
        position: "relative",
        left: "620px",
        top: "-25px",
        width: "70px",
        fontFamily: 'Poppins, sans-serif',
        padding: "10px"
    }
    const socials = {
        position: "relative",
        left: "1020px",
        top: "-115px",
        padding: "10px"
    }
    const number = "(+234)8134385826";
    return (
        <div className="" style={background}>
            <div >
                <img style={domino} src="/images/Logo.png" alt="domino pizza" />
            </div>
            <div >
                <img style={whatsappNum} src="images/Vector.png" alt="whatsapp" />
                <p className="w3-opacity w3-large w3-wide" style={whatsappNum}><b>{number}</b></p>
            </div>
            <div style={socials}>
                <img className="" src="/images/Frame 20.png" alt="x.com" />
                <img src="/images/Frame 20-1.png" alt="facebook.com" />
                <img src="/images/Frame 20-2.png" alt="instagram.com" />
                <img src="/images/Frame 20-3.png" alt="yahoo.com" />
            </div>
        </div>
    )
}

export default FooterContact
