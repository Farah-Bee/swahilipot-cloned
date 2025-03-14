import Link from 'next/link';

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

export default function FeaturedArticle({ title, excerpt, author, date, image, slug }: FeaturedArticleProps) {
  return (
    <div className="bg-blue-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-lg overflow-hidden"> {/* Ensure spacing and readability */}
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:w-1/2">
          <div className="text-sm text-primary font-medium mb-2">{date}</div>
          <h2 className="text-xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">
            {excerpt}
          </p>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 mr-3"></div>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              By {author}
            </span>
          </div>
          <a
            href="https://medium.com/@swahilipotengineering/christopher-mwalimo-my-experience-from-being-an-attachee-to-working-at-swahilipot-hub-foundation-97f7043d5596"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-sm py-2 px-4"
          >
            Read Article
          </a>
        </div>
      </div>
    </div>
  );
}
