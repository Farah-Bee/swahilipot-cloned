import React from 'react';

export default function CaseManagementPage() {
  return (
    <>
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container-custom mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[calc(4rem*0.5)] md:text-[calc(6rem*0.5)] font-bold mb-6">
            Case Management Program
          </h1>
          <p className="text-[calc(1.25rem*0.8)] mb-8">
           Anyone, Anywhere
          </p>
        </div>
      </div>
    </section>
  


      
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Case Management Program</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              At the Swahili Pot Hub Foundation (SPH), we are committed to making a positive impact on the lives of young individuals in Mombasa County and its six sub-counties. For the past seven years, we have been dedicated to helping youth overcome challenges and thrive. Through strategic partnerships with communities, government entities, CSOs, and local leaders, SPH has been a beacon of hope for young people from diverse backgrounds
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
              The primary objective of the Case Management Project is to connect 60,000 youth in Mombasa County and its sub-counties to a wide range of opportunities and sustainable employment. We understand that each young person is unique, and to empower them effectively, we emphasize a personalized case management approach. This approach allows us to offer customized support and guidance, helping young individuals access and thrive in various educational, vocational, and entrepreneurial pathways.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/images/case-management.jpg" 
                alt="Case Management Program" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">How Our Program Works</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary text-white p-4 rounded-full mr-6 text-xl font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We begin with a comprehensive assessment to understand the individual's situation, challenges, strengths, and goals. This helps us develop a personalized support plan.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-4 rounded-full mr-6 text-xl font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Resource Connection</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We connect youth with relevant resources and services based on their needs, including educational opportunities, healthcare, housing support, legal assistance, and more.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-4 rounded-full mr-6 text-xl font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skills Development</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We provide training in both technical and soft skills to help youth build the capabilities they need to succeed in education, employment, and life.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-white p-4 rounded-full mr-6 text-xl font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our case managers provide continuous mentorship, guidance, and support, regularly checking in with participants and adjusting plans as needed to ensure progress toward goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-orange-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="text-4xl text-primary mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Educational Support</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We help youth access educational opportunities, from basic education to specialized training programs, and provide tutoring and academic support.
              </p>
            </div>
            
            <div className="bg-orange-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="text-4xl text-primary mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">Employment Assistance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We support youth in developing job skills, creating resumes, preparing for interviews, and connecting with employment opportunities.
              </p>
            </div>
            
            <div className="bg-orange-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="text-4xl text-primary mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-3">Life Skills Development</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We provide training in essential life skills such as financial literacy, communication, problem-solving, and self-advocacy.
              </p>
            </div>
          </div>
          
          
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              There are several ways you can support our Case Management Program and help make a difference in the lives of youth in our community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-orange-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Refer a Youth</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you know a young person who could benefit from our program, please refer them to us.
                </p>
                <a href="/contact" className="text-primary font-medium hover:underline">
                  Contact Us →
                </a>
              </div>
              
              <div className="bg-orange-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Share your skills and time as a mentor, tutor, or workshop facilitator for our program participants.
                </p>
                <a href="/about/work-with-us" className="text-primary font-medium hover:underline">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-orange-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Donate</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Support our program financially to help us reach more youth and provide the resources they need.
                </p>
                <a href="/stwdonate/support-stw" className="text-primary font-medium hover:underline">
                  Donate Now →
                </a>
              </div>
            </div>
            
            <a href="/contact" className="btn px-8 py-3">
              Contact Us to Learn More
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
      title: "Case Management Program - SwahiliPot Hub",
      description: "Our Case Management Program provides personalized support to youth facing various challenges, connecting them with resources and opportunities to help them thrive."
    }
  };
}