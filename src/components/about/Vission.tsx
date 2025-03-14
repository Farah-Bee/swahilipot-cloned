export default function Vission() {
  return (
    <section className="py-16 bg-orange-50 dark:bg-gray-900">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
            {/* Vision image */}
            <img
              src="/images/cultureimage.png" 
              alt="Swahilipot Vision"
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

          <div className="order-1 md:order-2">
            <h2 className="text-[calc(3rem*0.8)] font-bold mb-6 text-gray-800 dark:text-white">
              Our Vision
            </h2>
            <p className="text-[calc(1.125rem*0.8)] text-gray-700 dark:text-gray-300 mb-6">
              We envision an East Africa where youth are at the forefront of technological innovation and cultural expression, creating solutions to local challenges and contributing to the global digital economy.
            </p>
            <p className="text-[calc(1.125rem*0.8)] text-gray-700 dark:text-gray-300">
              SwahiliPot Hub aims to be the leading hub for technology and arts in the region, known for nurturing talent, fostering innovation, and preserving cultural heritage through digital means.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
