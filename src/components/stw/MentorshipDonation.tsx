import React from 'react';
import Link from 'next/link';

export default function MentorshipDonation() {
  return (
    <section className="py-16 bg-orange-50 dark:bg-gray-900">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Donation Package 1 */}
          <div className="bg-orange-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              KES 10,000 - Full Mentorship Support Package + A Packet of Pads
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Your generous contribution will play a vital role in empowering Swahili Tech Women's mission to mentor and support women throughout the Pwani region. Your donation will directly contribute to facilitating mentorship programs and providing essential hygiene products and sanitary pads to those in need.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Thank you for your support in advancing our efforts to foster growth and empowerment among women in the tech industry.
            </p>
            <Link
              href="https://flutterwave.com/pay/4nvphchgpofl"
              target="_blank"
              className="btn px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Donate Now
            </Link>
          </div>

          {/* Donation Package 2 */}
          <div className="bg-orange-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              KES 5,000 - Half Mentorship Support Package
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Your generous contribution will significantly contribute to Swahili Tech Women's mission of mentoring and supporting women in the Pwani region. With your donation, we can partially fund mentorship programs and provide essential hygiene products and sanitary pads to those in need.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Thank you for your support in our ongoing efforts to empower women in the tech industry.
            </p>
            <Link
              href="https://flutterwave.com/pay/4nvphchgpofl"
              target="_blank"
              className="btn px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Additional Text */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-8 mb-6 text-center">
          With your support, we can provide structured mentorship, career guidance, and networking opportunities to more women across East Africa.
        </p>
      </div>
    </section>
  );
}
