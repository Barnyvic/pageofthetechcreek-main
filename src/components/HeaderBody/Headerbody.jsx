import Woman2 from "../assets/woman2.jpg";
import sign from "../assets/Sign.svg";

const HeaderBody = () => {
  return (
    <div className="Headerbody_Conatiner">
      <div className="container">
        <div className="headerBodyContent">
          <h1>
            Welcome <br /> to the {" <creek />"}
          </h1>
          <p>
            TechCreek is a habitat for the teeming population of youths making
            sense of their lives with their digital skills and competencies, and
            actively involved in the development of the ‘new economy’ from
            Rivers State.
          </p>
          <div className="form_container">
            <div className="sign_in">
              <h3 id="sign_in">
                Sign-in
              </h3>
              <h3 id="reg">Register</h3>
            </div>
          </div>
        </div>
        <div className="HeaderBody_img">
          <img src={Woman2} alt=" A girl with a laptop" />
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
