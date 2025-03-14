import React, { useState } from 'react';

export default function MemberShipForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    occupation: '',
    techInterest: '',
    experience: '',
    expectations: '',
    membershipType: 'regular',
    agreeTerms: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setIsSubmitted(true);
  };

  const techInterests = [
    "Software Development",
    "Data Science",
    "UI/UX Design",
    "Cybersecurity",
    "AI/Machine Learning",
    "Product Management",
    "Digital Marketing",
    "Other"
  ];

  const experienceLevels = [
    "Beginner (No experience)",
    "Novice (Some basic knowledge)",
    "Intermediate (Some practical experience)",
    "Advanced (Professional experience)",
    "Expert (Specialist in the field)"
  ];

  return (
    <section className="py-16 bg-orange-50 dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Membership Application</h2>
            
            {isSubmitted ? (
              <div className="text-center">
                <div className="text-5xl text-primary mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Thank you for applying to join Swahili Tech Women. We've received your application and will review it shortly.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  You'll receive an email confirmation with next steps. We look forward to welcoming you to our community!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="occupation" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Current Occupation *</label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="e.g., Student, Software Developer, Teacher, etc."
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="techInterest" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Area of Tech Interest *</label>
                  <select
                    id="techInterest"
                    name="techInterest"
                    value={formData.techInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    required
                  >
                    <option value="">Select an area of interest</option>
                    {techInterests.map((interest, index) => (
                      <option key={index} value={interest.toLowerCase()}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="experience" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Experience Level *</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    required
                  >
                    <option value="">Select your experience level</option>
                    {experienceLevels.map((level, index) => (
                      <option key={index} value={level.toLowerCase()}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="expectations" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">What do you hope to gain from joining STW? *</label>
                  <textarea
                    id="expectations"
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    required
                  ></textarea>
                </div>
                                    
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                    </span>
                  </label>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn px-8 py-3">
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}