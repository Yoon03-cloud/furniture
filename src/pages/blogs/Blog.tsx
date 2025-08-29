import { posts } from "../../data/posts";
import BlogPostList from "../../components/blogs/BlogPostList";
function Blog() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center md:text-left mt-8">
        Latest Blog Posts
      </h1>
      <BlogPostList posts={posts} />
    </div>
  );
}

export default Blog;
