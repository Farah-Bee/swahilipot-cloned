import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    agreeTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      // Explicitly cast to HTMLInputElement here
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked,  // Now TypeScript knows target is an HTMLInputElement
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(data.message || 'There was an issue with your submission.');
        alert('There was an issue with your submission. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while sending your form. Please try again later.');
      alert('An error occurred while sending your form. Please try again later.');
    }

    setIsSubmitting(false);
  };

  const interests = [
    'Technology',
    'Arts & Culture',
    'Entrepreneurship',
    'Community Development',
    'Education',
    'Other',
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800 text-white dark:text-white">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50 dark:bg-gray-600 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Join Our Community</h2>

            {isSubmitted ? (
              <div className="text-center">
                <div className="text-5xl text-primary mb-4">✓</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Thank You for Joining!</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-6">
                  Your application has been submitted successfully. We'll review your information and get back to you soon.
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  In the meantime, feel free to explore our website to learn more about our programs and initiatives.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* First Name */}
                <div className="mb-4">
                  <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  />
                </div>

                {/* Area of Interest */}
                <div className="mb-4">
                  <label htmlFor="interest" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Area of Interest *</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    required
                  >
                    <option value="">Select an area of interest</option>
                    {interests.map((interest, index) => (
                      <option key={index} value={interest.toLowerCase()}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Tell us about yourself</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="Share your background, skills, and what you hope to achieve by joining SwahiliPot Hub."
                  ></textarea>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="mb-6">
                  <label className="flex items-start text-gray-700 dark:text-gray-300">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <span>
                      I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn px-8 py-3 bg-primary text-white hover:bg-primary-dark disabled:bg-gray-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="text-center text-red-500 mt-4">{error}</div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
