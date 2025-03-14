import React from 'react';

export default function MombasaTourismPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[calc(4rem*0.5)] md:text-[calc(6rem*0.5)] font-bold mb-6">
              Mombasa Tourism Innovation Lab
            </h1>
            <p className="text-[calc(1.25rem*0.8)] mb-8">
              Inspiring the intrest of opportunities in Mombasa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Mombasa Tourism Innovation</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              The Mombasa innovation lab, hosted at Swahilipot Hub Foundation, seeks to inspire the interest of opportunity youth in Mombasa in culture and heritage tourism as a means of Job creation. The logic of change is underpinned by this quote from the Cabinet secretary Tourism and Wildlife.


              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
              The inexistence of a structured way to innovate and scale new tourism products that entice the modern youthful traveller, who is more interested in the experience and less on the physical possessions, has led to reduction of touristic numbers.With support from the European Union, Camoes IP, Jumuia ya county Za Pwani, and the Go-Blue project to incubate innovative ideas in cultural and heritage tourism in Mombasa county.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/images/msainnovation.png" 
                alt="Mombasa Beach"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          

          <div className="bg-primary text-white p-8 rounded-lg mb-16 dark:bg-gray-900">
  <div className="flex justify-center items-center text-center">
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Objectives</h2>
      <ul className="space-y-2">
        <li>
          <span className="mr-2">✓</span>
          <span>Create jobs for young people by developing new tourism products that are yet to be developed.</span>
        </li>
        <li>
          <span className="mr-2">✓</span>
          <span>Become a vehicle to incubate grassroot tourism ideas in Mombasa county.</span>
        </li>
        <li>
          <span className="mr-2">✓</span>
          <span>Develop research and key data points for advancement of the Tourism Industry.</span>
        </li>
        <li>
          <span className="mr-2">✓</span>
          <span>Contribute in rejuvenating the coastal tourism product.</span>
        </li>
      </ul>
    </div>
  </div>
</div>
    <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Apply</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            We are receiving proposals from organizations and business in tourism, hospitality, and cultural heritage that can benefit from the pilot.             </p>

            

            <a href="https://airtable.com/shru9sDInYXqHsL1g" className="btn px-8 py-3">
              Make Application
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Mombasa Tourism - Explore the Coast",
      description: "Discover the beauty, culture, and adventure that await you in Mombasa, Kenya's coastal paradise."
    }
  };
}