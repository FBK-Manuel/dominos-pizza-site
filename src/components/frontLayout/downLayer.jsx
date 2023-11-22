import { Link } from "react-router-dom"


const DownLayer = () => {

    const gradient = {
        background: "#E92944",
        width: "100%",
        height: "250px",
        position: "relative",
        top: "70px",
    }

    const style = {
        position: "relative",
        top: "20px",
        left: "755px",
        width: "400px",
        height: "100px",
        fontFamily: 'Poppins, sans-serif',
        fontWeight: "bolder",
        fontSize: "30px",
        lineHeight: "1.3",
    }

    const float = {
        position: "relative",
        top: "-450px",
        left: "750px",


    }

    const img = {
        position: "relative",
        top: "-200px",
        left: "200px",
    }

    return (
        <div>
            <div className="" style={gradient}>
                <h2 className="w3-text-white" style={style}>Now With Your Favorite <br /> Domino Mobile App <br /> In Your Pocket</h2>

                <div className="" style={img}>
                    <img src="/images/Mockup 1.png" alt="phones" />
                </div>

                <Link to=''>
                    <img style={float} className="" src="/images/app-store-badge-og-twitter 1.png" alt="appstore" />
                </Link>
                <Link to=''>
                    <img style={float} src="/images/image 3.png" alt="playstore" />
                </Link>
            </div>

        </div>
    )
}

export default DownLayer
