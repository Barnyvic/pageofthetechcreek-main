import connect from "../assets/connect.svg";
import create from "../assets/create.svg";
import learn from "../assets/learn.svg";

const Headerfooter = () => {
  return (
    <div className="Main_Container">
      <div className="container">
        <div className="Footergrid_container">
          <div className="connect_container">
            <img src={connect} alt="" />
            <p>connect</p>
          </div>
          <div className="create_container">
            <img src={create} alt="" />
            <p>connect</p>
          </div>
          <div className="learn_container">
            <img src={learn} alt="" />
            <p>connect</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerfooter;
