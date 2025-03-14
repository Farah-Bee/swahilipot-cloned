import React from 'react';

export default function STWExplanation() {
  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">About Swahili Tech Women</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Swahili Tech Women (STW) is an initiative dedicated to increasing the participation and success of women in technology fields across East Africa. Through education, mentorship, networking, and advocacy, we aim to bridge the gender gap in tech and empower women to pursue and thrive in STEM careers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-light dark:bg-gray-700 p-6 rounded-lg">
            <div className="text-4xl text-primary mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To create an inclusive tech ecosystem where women have equal opportunities to learn, work, and lead in technology fields.
            </p>
          </div>
          
          <div className="bg-light dark:bg-gray-700 p-6 rounded-lg">
            <div className="text-4xl text-primary mb-4">👁️</div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A world where women are equally represented and valued in technology, contributing their unique perspectives to innovation and problem-solving.
            </p>
          </div>
          
          <div className="bg-light dark:bg-gray-700 p-6 rounded-lg">
            <div className="text-4xl text-primary mb-4">💪</div>
            <h3 className="text-xl font-semibold mb-3">Our Impact</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Since our founding, we've trained over 500 women in various tech skills, mentored 200+ women, and helped 100+ secure jobs in the tech industry.
            </p>
          </div>
        </div>
        
        <div className="bg-primary text-white p-8 rounded-lg dark:bg-gray-900 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Women in Tech?</h3>
              <p className="mb-4">
                Despite making up half the population, women remain significantly underrepresented in technology fields. This gender gap not only limits opportunities for women but also deprives the tech industry of diverse perspectives and talent.
              </p>
              <p>
                By supporting women in tech, we're working toward a more inclusive, innovative, and equitable future for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">13%</div>
                <p className="text-sm">Women in tech leadership roles in East Africa</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">27%</div>
                <p className="text-sm">Female STEM graduates in Kenya</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">3x</div>
                <p className="text-sm">Higher innovation in gender-diverse tech teams</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">21%</div>
                <p className="text-sm">Higher profitability with diverse leadership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}