import { useParams, Link } from "react-router-dom";
import { posts } from "../../data/posts";
import { Icons } from "../../components/icons";
import { Button } from "../../components/ui/button";

function BlogsDetail() {
  const { postID } = useParams();
  const post = posts.find((post) => post.id === postID);

  return (
    <div className="container mx-auto px-4 lg:px-0 ">
      <section className="flex flex-col lg:flex-row">
        <section className="">
          <Button variant="outline" asChild className="">
            <Link to="/blogs">
              <Icons.arrowLeft />
              All posts
            </Link>
          </Button>
          {post ? (
            <>h2.</>
          ) : (
            <p className="font-semibold mb-16 mt-8 text-center text-xl text-muted-foreground">
              No post found.
            </p>
          )}
        </section>
        <section className="">Other</section>
      </section>
    </div>
  );
}

export default BlogsDetail;
