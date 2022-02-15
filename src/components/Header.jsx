import HeaderBody from "./HeaderBody/Headerbody";
// import Headerfooter from "./Hearderfooter/Hearderfooter";
import Navbar from "./navbar/Navbar";

const HEADER = () => {
  return (
    <div className="Container">
      <Navbar />
      <HeaderBody />
      {/* <Headerfooter/> */}
    </div>
  );
};

export default HEADER;
