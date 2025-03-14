interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
};

export default function TeamCard({ name, title, bio, image }: TeamCardProps) {
  return (
    <div className="bg-orange-50 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">{name}</h3>
        <p className="text-primary font-medium mb-4 text-gray-600 dark:text-gray-300">{title}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{bio}</p>
      </div>
    </div>
  );
}
