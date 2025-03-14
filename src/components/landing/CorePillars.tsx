import Image from "next/image";

export default function CorePillars() {
  const pillars = [
    {
      title: "Technology",
      description:
        "Swahilipot Hub empowers young individuals in technology through programs like Data and Research, Digital Literacy, Industrial Attachment, Campus Ambassador, and Pitching Thursday.",
      imageSrc: "/images/pillar1.svg",
      bgColor: "bg-blue-50 dark:bg-blue-300", // Muted light blue for light mode, dark blue for dark mode
    },
    {
      title: "Creatives & Arts",
      description:
        "The Creative Department brings imagination to life through initiatives like Sanaa Show and Saanart Shop, nurturing talents in acting, voice arts, and diverse artistic expressions, empowering artists to make a difference in the community.",
      imageSrc: "/images/pillar2.svg",
      bgColor: "bg-orange-50 dark:bg-orange-300", // Muted light orange for light mode, dark orange for dark mode
    },
    {
      title: "Heritage",
      description: "Connecting the past and the future.",
      imageSrc: "/images/pillar3.svg",
      bgColor: "bg-blue-50 dark:bg-blue-300", // Muted light blue for light mode, dark blue for dark mode
    },
  ];

  return (
    <section className="py-16 bg-blue-50 text-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Swahilipot Core Pillars
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Tech | Arts | Heritage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${pillar.bgColor}`}
            >
              <h3 className="text-lg font-bold text-gray-800 dark:text-white-100">
                {pillar.title}
              </h3>
              <p className="text-gray-700 mb-4 dark:text-white-300">
                {pillar.description}
              </p>
              <Image
                src={pillar.imageSrc}
                alt={pillar.title}
                width={300}
                height={200}
                className="mx-auto"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-900 dark:text-gray-300">Have a question?</p>
          <a href="/contact" className="text-blue-600 hover:underline dark:text-blue-400">
            Contact Us &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
