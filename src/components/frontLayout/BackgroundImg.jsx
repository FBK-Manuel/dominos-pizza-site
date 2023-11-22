

const BackgroundImg = () => {
    const imageContainer = {
        position: "relative",
        top: "-1130px",
        left: "615px",
        width: "150%", /* Set the desired width for the image container */
        transform: "scale(1.5) skewY(10deg)", /* Enlarge by 150% and slant by 10 degrees */
        transformOrigin: "top left", /* Adjust the origin point for the transformation */
        overflow: "hidden", /* Hide any overflow */
    }
    const bgcolor = {
        background: "#012841",
        position: 'relative',
        top: "-570px",
        width: "100%",
        height: "400px",
        zIndex: 0
    }
    return (
        <div>
            <div style={bgcolor}></div>
            <div className="w3-center" style={imageContainer} >
                <img className=" w3-round-xxlarge w3-opacity-max" style={{ width: "100%", zIndex: 0 }} src="/images/Logo.png" alt="" />
            </div>

        </div>
    )
}

export default BackgroundImg
