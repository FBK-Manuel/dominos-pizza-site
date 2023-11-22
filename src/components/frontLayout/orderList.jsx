

const OrderList = () => {
    const grarient1 = {
        position: "relative",
        left: "180px",
        background: '#FFF1F3',
        width: '350px',
        height: '180px',
    }

    const grarient2 = {
        position: "relative",
        left: "220px",
        background: '#E92944',
        width: '350px',
        height: '180px',
    }
    const grarient3 = {
        position: "relative",
        right: "150px",
        background: '#FFF1F3',
        width: '350px',
        height: '180px',
    }
    const line1 = {
        position: "relative",
        left: "180px",
        background: '#0C6A93',
        width: '550px',
        height: '200px',
    }
    const line2 = {
        position: "relative",
        left: "240px",
        top: "-40px",
        background: '#0C6A93',
        width: '550px',
        height: '200px',
    }
    const pText = {
        position: "relative",
        top: "10px",
        right: '-5px',
        fontFamily: 'Poppins, sans-serif',
        fontSize: "15px",
    }
    const pText2 = {
        position: "relative",
        top: "50px",
        right: '-5px',
        fontFamily: 'Poppins, sans-serif',
        fontSize: "15px",
    }
    const circle = {
        background: '#ECF9FF',
        position: "relative",
        top: "25px",
        left: "-30px",
        width: '120px',
        height: '120px',
        borderRadius: '100px',
    }

    const image1 = {

        position: "relative",
        top: "18px",
        left: "15px",
        width: '100px',
        height: '100px',
        borderRadius: '100px',
    }

    return (
        <>
            <div className=" w3-padding-64 w3-margin">
                <div className=" w3-round-xlarge icon-container w3-card" style={grarient1}>
                    <div className="w3-circles w3-right w3-margin">
                        <img src="/images/—Pngtree—modern kitchen food boxed cheese_9048155 1.png" style={image1} alt="pizza" />
                    </div>
                    <div className="w3-padding-0 w3-margin-left" style={{ lineHeight: "1.1", fontFamily: 'Poppins, sans-serif', }}>
                        <h4 className=""><b className="w3-text-deep-red w3-xlarge">ANY DAY <br /> OFFERS</b></h4>
                        <p className="">NEW PHENOMENOM PIZZA TASTE</p>
                        <p className="w3-text-deep-red"><b>N2500</b></p>
                        <p className="w3-text-grey"><b>-<span className="w3-text-domino">-</span>--</b></p>
                    </div>
                </div>
                <div className=" w3-round-xlarge icon-container  w3-card" style={grarient2}>
                    <div className="w3-circles2 w3-right w3-margin">
                        <img src="/images/icecreampng.parspng 1.png" alt="ice-cream" style={image1} />
                    </div>
                    <div className="w3-padding-0 w3-margin-left" style={{ lineHeight: "1.1", fontFamily: 'Poppins, sans-serif', fontWeight: "bolder" }}>
                        <h4 className=""><b className="w3-text-white w3-xlarge">OTHER <br /> STYLES</b></h4>
                        <p className="w3-text-white">SAME ROOM WE MAKE ICE CREAM</p>
                        <p className="w3-text-white"><b>N1500</b></p>
                        <p className="w3-text-grey"><b>-<span className="w3-text-white">-</span>--</b></p>
                    </div>
                </div>
                <div className=" w3-round-xlarge icon-container w3-right w3-card" style={grarient3}>
                    <div className="w3-circles3 w3-right w3-margin">
                        <img src="/images/pngimg 1.png" alt="location" style={image1} />
                    </div>
                    <div className="w3-padding-0 w3-margin-left" style={{ lineHeight: "1.1", fontFamily: 'Poppins, sans-serif', }}>
                        <h4 className="w3-padding" style={{ fontWeight: "bolder" }}><b className="w3-text-deep-red w3-xlarge">FIND DOMINO NEAR YOU</b></h4>
                        <p className="w3-text-grey w3-padding-24"><b>-<span className="w3-text-domino">-</span>--</b></p>
                    </div>
                </div>
            </div>
            <div className="w3-container w3-padding-16">
                <div className=" w3-round-xlarge icon-container w3-card" style={line1}>
                    <div className="w3-right w3-margin" >
                        <img src="/images/image 1.png" style={circle} alt="chicken" />
                    </div>
                    <div className="w3-padding-0 w3-margin-left" style={{ lineHeight: "1.1" }}>
                        <h1 className="w3-text-white" style={{ fontWeight: "bolder" }}>CRIPSY AND <br /> FRESH CHICKEN MASTER CHEF</h1>
                        <button className="w3-btn w3-deep-red w3-large w3-round-xlarge" style={pText}><b>Order now</b></button>
                    </div>
                </div>
                <div className=" w3-round-xlarge icon-container w3-card" style={line2}>
                    <div className=" w3-right w3-margin" >
                        <img src="/images/image 2.png" style={circle} alt="Hope" />
                    </div>
                    <div className="w3-padding-0 w3-margin-left" style={{ lineHeight: "1.1" }}>
                        <h1 className="w3-text-white" style={{ fontWeight: "bolder" }}>DO YOU WANT <br /> TO BE A HOPE?</h1>
                        <button className="w3-btn w3-deep-red w3-large w3-round-xlarge" style={pText2}><b>See more</b></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrderList
