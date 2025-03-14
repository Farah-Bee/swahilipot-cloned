import BlogHero from '@/components/blog/BlogHero';
import FeaturedArticle from '@/components/blog/FeaturedArticle';
import Articles from '@/components/blog/Articles';
import SignupCTA from '@/components/blog/SignupCTA';

export default function Blog() {
  // This would typically come from your data file or CMS
  const featuredArticle = {
    title: "Christopher Mwalimo: My experience from being an attachee to working at Swahilipot Hub Foundation",
    excerpt: `Hey there,                                                                       
    My name is Christopher Mwalimo Mlolwa. I am a fourth-year student at Technical University of Mombasa pursuing BSc. Statistics and Computer Science and I work at Swahilipot Hub Foundation as a Software Developer. 
  
    This article highlights my journey from being an attachee to working at Swahilipot Hub Foundation as a Software Developer.`,
    author: "Christopher Mwalimo",
    date: "April 5, 2024",
    image: "/images/mwalimo.jpeg",
    slug: "my-story"
  };

  return (
    <>
      <BlogHero />
      <div className="py-12 bg-orange-50 dark:bg-gray-800 text-gray-900 dark:text-white"> {/* Light mode and dark mode background and text */}
        <div className="container-custom mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Featured Article</h2> {/* Heading color */}
          <FeaturedArticle 
            title={featuredArticle.title}
            excerpt={featuredArticle.excerpt} // pass the excerpt as a string
            author={featuredArticle.author}
            date={featuredArticle.date}
            image={featuredArticle.image}
            slug={featuredArticle.slug}
          />

          {/* Add more text and the "Read More" button */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Want to read more stories from our community of innovators, creators, and changemakers?
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Click on the link below to access more articles and get inspired by the latest updates and insights or scroll to continue reading more articles.
            </p>
            <a 
              href="https://medium.com/@swahilipotengineering" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Explore More Articles
            </a>
          </div>
        </div>
      </div>

      <Articles />
      <SignupCTA />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Blog - SwahiliPot Hub",
      description: "Stories, insights, and updates from our community of innovators, creators, and change-makers."
    }
  };
}
