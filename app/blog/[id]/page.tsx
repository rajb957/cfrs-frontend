import BlogPage from '@/components/blog-page'

// This would typically come from an API or database
const blogPosts = {
  1: {
    id: '1',
    title: 'Introduction to Machine Learning',
    author: 'Alice Johnson',
    date: 'June 15, 2023',
    content: `
      <p>Machine Learning (ML) is a subset of artificial intelligence that focuses on the development of algorithms and statistical models that enable computer systems to improve their performance on a specific task through experience.</p>
      <h2>Key Concepts in Machine Learning</h2>
      <ul>
        <li>Supervised Learning</li>
        <li>Unsupervised Learning</li>
        <li>Reinforcement Learning</li>
      </ul>
      <p>These different approaches to machine learning allow for a wide range of applications, from image recognition to natural language processing and beyond.</p>
      <h2>Applications of Machine Learning</h2>
      <p>Machine learning is being applied in various fields, including:</p>
      <ol>
        <li>Healthcare: for diagnosis and treatment recommendations</li>
        <li>Finance: for fraud detection and risk assessment</li>
        <li>Marketing: for customer segmentation and personalized recommendations</li>
        <li>Autonomous vehicles: for object detection and decision making</li>
      </ol>
      <p>As the field continues to evolve, we can expect to see even more innovative applications of machine learning in our daily lives.</p>
    `,
    readTime: '5 min',
    category: 'Technology'
  },
  // Add more blog posts here
}
export async function generateStaticParams() {
    const paths = Object.keys(blogPosts).map(id => ({
        id: id
        }))
    
    console.log(paths)
    return paths
}



export default function BlogPostPage({ params } : { params: { id: string } }) {
    const { id } = params   
    // In a real application, you would fetch the blog post data based on the ID
    console.log("ID",id)
    const blogPost = blogPosts[id as keyof typeof blogPosts]
    if (!blogPost) {
        return <div>Blog post not found</div>
    }

    return <BlogPage {...blogPost} />
}