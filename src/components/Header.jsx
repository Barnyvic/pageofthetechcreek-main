import HeaderBody from "./HeaderBody/Headerbody";
import Navbar from "./navbar/Navbar";
import Headerfooter from "./Hearderfooter/Hearderfooter";

const HEADER = () => {
  return (
    <div className="Container">
      <Navbar />
      <HeaderBody />
      <Headerfooter />
    </div>
  );
};

export default HEADER;
