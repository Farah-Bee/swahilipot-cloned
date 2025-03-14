export default function Mission() {
  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[calc(3rem*0.5)] font-bold mb-6 text-gray-800 dark:text-white">
              Our mission is to help the Community Grow itself
            </h2>
            <p className="text-[calc(1.125rem*0.8)] text-gray-700 dark:text-gray-300 mb-6">
              Swahilipot Hub Foundation is a non-profit organization that meaningfully engages and empowers youth (18 to 35 years) to enable them to unleash their full potential. Based in the coastal city of Mombasa in Kenya, it is regulated by the NGO Coordination Board of Kenya.
            </p>
          </div>
          
          {/* Mission image and button */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
            {/* Mission image */}
            <img
              src="/images/mission-image.png" 
              alt="Swahilipot Mission"
              className="w-full h-auto"
            />

            {/* Button that opens a new tab for the documentary */}
            <div className="mt-4 text-center">
              <a
                href="https://www.youtube.com/watch?v=bscypssE8Ms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
              >
                Watch Our Documentary
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
