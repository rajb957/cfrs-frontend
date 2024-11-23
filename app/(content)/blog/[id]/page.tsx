import BlogPage from '@/ui/pages/blog-page';

async function getBlogPostById(id: string) {
  const response = await fetch(`${process.env.BACKEND_URL}/blog/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch blog post data");
  }
  const post = await response.json();
  return post;
}

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/all_posts`);
    if (!response.ok) {
      console.error("Failed to fetch posts:", response.statusText);
      return [];
    }
    const posts = await response.json();
    // console.log("Fetched posts:", posts);
    return posts.map((post:number) => ({ id: post + "" })); // Ensure IDs are strings
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const blogPost = await getBlogPostById(id);
    const url = `${process.env.BACKEND_URL}/proxy?url=${encodeURIComponent(blogPost.blog_link)}`;

    return <BlogPage {...blogPost} blog_link={url} />;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return <div>Failed to load blog post. Please try again later.</div>;
  }
}
