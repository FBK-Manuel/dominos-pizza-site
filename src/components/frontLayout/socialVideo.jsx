

const SocialVideo = () => {
    const allfix = {
        position: "relative",
        top: "-100px",
    }
    const text = {
        position: "relative",
        width: "50px",
        height: "50px",
        top: "-700px",
        left: "200px",
        paddingTop: "200px",
        fontWeight: "bolder",
        fontFamily: 'Poppins, sans-serif',
        fontSize: "80px"
    }

    const img1 = {
        position: "relative",
        width: "500px",
        height: "350px",
        top: "-550px",
        left: "190px",
    }
    const img2 = {
        position: "relative",
        width: "500px",
        height: "350px",
        top: "-550px",
        left: "350px",
    }


    return (
        <div style={allfix}>
            <div>
                <h1 className="w3-text-grey" style={text}>VIDEOS</h1>
            </div>
            <div >
                <img className="w3-hover-opacity" style={img1} src="/images/Video 1.png" alt="video image" />
                <img className="w3-hover-opacity" style={img2} src="/images/Video 2.png" alt="video image" />
            </div>
        </div>
    )
}

export default SocialVideo
