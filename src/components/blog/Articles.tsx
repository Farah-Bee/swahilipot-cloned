import Link from 'next/link';

interface ArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  category: string;
}

function ArticleCard({ title, excerpt, author, date, image, slug, category }: ArticleProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-primary font-medium">{date}</span>
          <span className="text-xs bg-light dark:bg-gray-600 px-2 py-1 rounded-full text-gray-700 dark:text-white">{category}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white"> {/* Title color for dark/light modes */}
          {title}
        </h3>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">By {author}</span>
          </div>
          <a
            href={`/${slug}`} // Assuming `slug` is the unique identifier for the article
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline dark:text-blue-400"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Articles() {
  // All articles in a single array
  const articles = [
    {
      title: "Visual Studio Code Setup: Unleash Your Coding Creativity",
      excerpt: "Visual Studio Code Setup: Unleash Your Coding Creativity.",
      author: "Aron Wanje",
      date: "April 30, 2024",
      image: "/images/vscode.jpg",
      slug: "technology-transforming-east-africa",
      category: "Technology"
    },
    {
      title: "Swahili Tech Women(STW)",
      excerpt: "How our Swahili Tech Women program is helping bridge the gender gap in technology fields.",
      author: "Rosa Ndinda",
      date: "April 22, 2024",
      image: "/images/womentech.jpg",
      slug: "women-in-tech-swahilipot-impact",
      category: "Women in Tech"
    },
    {
      title: "Industrial Attachment Applications at Swahilipot Hub Foundation",
      excerpt: "Industrial Attachment Applications at Swahilipot Hub Foundation",
      author: "Chris Achinga",
      date: "April 4, 2024",
      image: "/images/attach.jpeg",
      slug: "IDUSTRIAL-attachment",
      category: "Indusrial Attachment"
    },
  ];

  return (
    <section className="py-16 bg-orange-100 dark:bg-gray-900">
      <div className="container-custom mx-auto">
        {/* Display all 3 articles in a single grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              author={article.author}
              date={article.date}
              image={article.image}
              slug={article.slug}
              category={article.category}
            />
          ))}
        </div>

        {/* "More" button linking to Medium */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex">
            <a
              href="https://medium.com/@swahilipotengineering"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Read more
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
