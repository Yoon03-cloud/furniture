import { Link } from "react-router-dom";
import Couch from "../data/images/couch.png";
import { Button } from "../components/ui/button";
function Home() {
  return (
    <div className=" container mx-auto text-2xl mt-16">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="">Modern Interior Design Studio</h1>
          <p className="">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div className="">
            <Button>
              <Link to="#">Shop Now</Link>
            </Button>
            <Button>
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
        {/* image section */}
        <img src={Couch} alt="Couch" />
      </div>
    </div>
  );
}

export default Home;
