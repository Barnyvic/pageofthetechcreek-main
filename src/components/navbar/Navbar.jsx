import Logo from "../assets/logo2.png";
import location from "../assets/location.svg";
import Alert from "../assets/notification.svg";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

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
            <p>
              Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
              Harcourt. Rivers State, Nigeria. talk@techcreek.ng O9030003185,
              09030003180
            </p>
          </div>
        </div>
        <div className="Navbar_Menu">
          <div className="text">
            <h4>
              Ongoing Notification <span></span>
            </h4>
          </div>
          <div className="bell">
            <img onClick={handleModal} src={Alert} alt="" />
          </div>
        </div>
        <Modal show={modal}>
          <div className="modaldiv">
            <form action="" method="post">
              <div className="Form-header">
                <h1>ICT & Digital Literacy Training</h1>
              </div>
              <div className="paymentnotification">
                <div className="firstparag">
                  <p>Training fee is N20,000(Twenty Thousand Naira only).</p>
                </div>
                <div className="payment-details">
                  <p>
                    <span>**</span>
                    Make payment to RSG Information & Comm. Dept(ICT) 1011616837
                    Zenith Bank Submit Teller or payment receipt at
                    Riv-TechCreek, R/S ICT Dept, Aba Road, PH <span>**</span>
                  </p>
                </div>
                <div className="personnalInfo">
                  <h1>Personal Information</h1>
                  <div className="Personnal-info-details">
                    <input type="text" required placeholder="First-name*" />
                    <input type="text" placeholder="Middle-name" />
                    <input type="text" required placeholder="Last-name*" />
                    <input type="date" required placeholder="Date of Birth*" />
                    <select
                      required
                      name="Education"
                      id="Education"
                      placeholder=" --Select Education"
                    >
                      <option value="O-level">Please Select</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Bachelors Degree ">
                        Bachelors Degree
                      </option>
                      <option value="OND/HND">OND/HND</option>
                      <option value="Master Degree ">Master Degree</option>
                      <option value="Other ">Other</option>
                    </select>
                    <select
                      required
                      name="gender"
                      id="gender"
                      placeholder=" --gender--"
                    >
                      <option value="gender">--gender--</option>
                      <option value="Services">Services</option>
                      <option value="Veteran">Veteran</option>
                    </select>
                  </div>
                  <div className="stateandlocal">
                    <select
                      name="States"
                      id="States"
                      placeholder="--Select State Of Origin"
                    >
                      <option value="--Select State of Origin--">
                        --Select State of Origin--
                      </option>
                      <option value="Abuja FCT">Abuja FCT</option>
                      <option value="Abia State">Abia</option>
                      <option value="Adamawa">Adamawa</option>
                      <option value="Akwa Ibom">Akwa Ibom</option>
                      <option value="Anambra">Anambra</option>
                      <option value="Bauchi">Bauchi</option>
                      <option value="Bayelsa">Bayelsa</option>
                      <option value="Benue">Benue</option>
                      <option value="Borno">Borno </option>
                      <option value="Cross River">Cross River</option>
                      <option value="Delta">Delta</option>
                      <option value="Ebonyi">Ebonyi</option>
                      <option value="Edo">Edo</option>
                      <option value="Ekiti">Ekiti</option>
                      <option value="Enugu"> Enugu</option>
                      <option value="Gombe">Gombe</option>
                      <option value="Imo">Imo</option>
                      <option value="Jigawa">Jigawa</option>
                      <option value="Kaduna">Kaduna</option>
                      <option value="Kano">Kano</option>
                      <option value="Katsina">Katsina</option>
                      <option value="Kebbi">Kebbi</option>
                      <option value="Kogi">Kogi</option>
                      <option value="Kwara">Kwara</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Nassarawa">Nassarawa</option>
                      <option value="Niger">Niger</option>
                      <option value="Ogun">Ogun</option>
                      <option value="Ondo">Ondo</option>
                      <option value="Osun">Osun</option>
                      <option value="Oyo">Oyo</option>
                      <option value="Plateau">Plateau</option>
                      <option value="Rivers">Rivers</option>
                      <option value="Sokoto">Sokoto</option>
                      <option value="Taraba">Taraba</option>
                      <option value="Yobe">Yobe</option>
                      <option value="Zamfara">Zamfara</option>
                    </select>
                    <input type="text" placeholder="L.G.A of Origin" />
                  </div>
                  <div className="Contact-container">
                    <div className="EmailandContact">
                      <input
                        type="email"
                        placeholder="Email Address*"
                        required
                      />
                      <input type="text" required placeholder="Phone Number*" />
                    </div>
                    <textarea
                      name="Message"
                      id="Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <button>Submit</button>
                </div>
              </div>
            </form>
            <Modal.Footer onClick={handleModal}>Close</Modal.Footer>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
