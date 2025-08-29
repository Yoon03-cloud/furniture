import { Link } from "react-router-dom";
import Couch from "../data/images/couch.png";
import { Button } from "../components/ui/button";
import CarouselCard from "../components/products/CarouselCard";
import { products } from "../data/product";
import BlogCard from "../components/blogs/BlogCard";
import { posts } from "../data/posts";

const samplePost = posts.slice(0, 3);
function Home() {
  const Title = ({
    title,
    href,
    textSide,
  }: {
    title: string;
    href: string;
    textSide: string;
  }) => (
    <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between mt-28 mb-10">
      <h2 className="text-2xl font-bold mb-4 lg:my-0">{title}</h2>
      <Link to={href} className="text-muted-foreground font-semibold underline">
        {textSide}
      </Link>
    </div>
  );

  return (
    <div className=" container mx-auto text-2xl  lg:mt-4">
      <div className="flex flex-col lg:flex-row items-center lg:mb-12 lg:justify-between">
        {/* Text Section */}
        <div className="text-center lg:text-left my-8 lg:mb-8 lg:w-2/5 ">
          <h1 className="font-extrabold text-4xl text-own lg:text-6xl lg:mb-8 mb-4">
            Modern Interior Design Studio
          </h1>
          <p className="text-lg text-own mb-6 lg:mb-8 text-muted-foreground/80">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div className="">
            <Button
              asChild
              className="bg-orange-300 font-semibold rounded-full px-6 py-6 text-base mr-2"
            >
              <Link to="#">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-semibold rounded-full text-black px-6 py-6 text-base "
            >
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
        {/* image section */}
        <img src={Couch} alt="Couch" className="w-full lg:w-3/5 lg:mt-8" />
      </div>
      <CarouselCard products={products} />
      <Title title="Recent Blog" href="/blogs" textSide="View All Post" />
      <BlogCard posts={samplePost} />
    </div>
  );
}

export default Home;
