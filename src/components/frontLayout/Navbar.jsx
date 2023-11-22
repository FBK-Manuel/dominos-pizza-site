import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const NavBar = () => {

  const styleRight = {
    position: "relative",
    left: "175px"
  }

  const styleCenter = {
    position: "relative",
    left: "550px",
    fontWeight: "bold"
  }

  const styleLeft = {
    position: "relative",
    left: "600px",
    fontWeight: "bolder"
  }

  return (
    <div className="w3-bar">
      <Link style={styleRight} to='/'>
        <img
          src="/images/Logo.png"
          alt="Dominos"
          className="w3-bar-item"
          height="55"
          width="50"
        />
      </Link>
      <Link to='/about' className="w3-bar-item w3-button w3-large w3-round-xxlarge w3-text-domino w3-padding-24 w3-text-none" style={styleCenter}>ABOUT US</Link>
      <Link to='/findus' className="w3-bar-item w3-button w3-large w3-round-xxlarge w3-left w3-text-domino w3-padding-24 w3-text-none" style={styleCenter}>FIND US</Link>
      <Link to='campaign' className="w3-bar-item w3-button w3-large w3-round-xxlarge w3-left w3-text-domino w3-padding-24 w3-text-none" style={styleCenter}>CAMPAIGN</Link>
      <Link to='/account' className="w3-bar-item w3-large w3-text-domino  w3-padding-24 w3-text-none" style={styleLeft}>
        <FontAwesomeIcon className=" w3-domino w3-padding w3-round-xlarge" icon={faUser} /></Link>
      <div className="icon-container">
        <Link to='/cart' className="w3-bar-item w3-large w3-text-domino w3-padding-24  w3-text-none" style={styleLeft}>
          <FontAwesomeIcon className=" w3-domino  w3-padding w3-round-xlarge" icon={faCartShopping} /><span className="badge w3-text-black w3-tiny">2</span></Link>
      </div>
    </div>
  );
}

export default NavBar;