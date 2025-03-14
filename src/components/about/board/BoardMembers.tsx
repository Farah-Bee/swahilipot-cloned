import TeamCard from './TeamCard';

export default function BoardMembers() {
  // This would typically come from your data file or CMS
  const boardMembers = [
    {
      name: "Mr .Mahmoud Noor",
      title: "Founder &  Chief Mentor",
      bio: "Mr. Mahmoud is the Founder of Swahilipot Hub Foundation.",
      image: "/images/mentor.jpg",
    },
    {
      name: "Zuhra Shariff",
      title: "Head of HR & Admin",
      bio: "Ms. Zuhra is the head of Human Resources at Swahilipot Hub.",
      image: "/images/zuhra.jpg",
    },
    {
      name: "To Name",
      title: "Secretary",
      bio: "",
      image: "/images/kiplangat.jpg",
    },
    {
      name: "Chris Achinga",
      title: "Technology Lead - Dude",
      bio: "Chris is the maker of softwares, and Father of Dragons at Swahilipot Hub.",
      image: "/images/achinga.jpeg",
    },
    {
      name: "Board Member 5 ",
      title: "Board Member",
      bio: "......................SwahiliPot Hub Foundation.",
      image: "/images/mtu.png",
    },
    {
      name: "Board Member 6",
      title: "Board Member",
      bio: ".................Swahilipot Hub Foundation.",
      image: "/images/mtu.png",
    }
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Board of Directors
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our board members bring diverse expertise and experience to guide SwahiliPot Hub's strategic direction. They are committed to our mission of empowering youth through technology, arts, and culture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <TeamCard 
              key={index}
              name={member.name}
              title={member.title}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
