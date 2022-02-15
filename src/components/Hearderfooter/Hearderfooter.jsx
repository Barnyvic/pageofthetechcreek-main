import connect from "../assets/connect.jpg";
import create from "../assets/create.jpg";
import learn from "../assets/learn.jpg";
const Headerfooter = () => {
  return (
    <div className="Main_Container">
      <div className="container">
        <div className="Footergrid_container">
          <div className="connect_container">
            <img src={connect} alt="" />
            <h3>connect</h3>
          </div>
          <div className="create_container">
            <img src={create} alt="" />
            <h3>connect</h3>
          </div>
          <div className="learn_container">
            <img src={learn} alt="" />
            <h3>connect</h3>
          </div>
          <div className="connect_container">
            <img src={connect} alt="" />
            <h3>connect</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerfooter;
