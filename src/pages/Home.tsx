import { Link } from "react-router-dom";
import Couch from "../data/images/couch.png";
import { Button } from "../components/ui/button";
function Home() {
  return (
    <div className=" container mx-auto text-2xl mt-16">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Text Section */}
        <div className="text-center lg:text-left py-6">
          <h1 className="font-extrabold text-green-900 text-3xl">
            Modern Interior Design Studio
          </h1>
          <p className="text-lg text-green-900 py-4 text-muted-foreground/80">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div className="lg:mr-0">
            <Button className="bg-yellow-500 font-semibold rounded-2xl px-6 ml-5 lg">
              <Link to="#">Shop Now</Link>
            </Button>
            <Button className="bg-white font-semibold rounded-2xl text-black px-6 ">
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
