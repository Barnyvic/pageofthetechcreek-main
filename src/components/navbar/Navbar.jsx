import Logo from "../assets/logo2.png";
import location from "../assets/location.svg";
import Member from "../assets/member.svg";
import Menu from "../assets/hamburger.svg";

const Navbar = () => {
  return (
    <div className="Navbar_container">
      <div className="container">
        <div className="Navbar_logo">
          <img src={Logo} alt="nav-bar-logo" className="logo" />
        </div>
        <div className="Navbar_location">
          <div className="location">
            <img src={location} alt="location-icon" className="location_img" />
          </div>
          <div className="location_details">
            <h4>
              Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
              Harcourt. Rivers State, Nigeria. talk@techcreek.ng O9030003185,
              09030003180
            </h4>
          </div>
        </div>
        <div className="Navbar_membership">
          <img src={Member} alt="Contact-icon" />
        </div>
        <div className="Navbar_Menu">
          <img src={Menu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
