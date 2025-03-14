import { useState } from 'react';

export default function SignupCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation for email
    if (!email) {
      setError('Please enter a valid email.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('There was an error while submitting the form.');
      }
    } catch (err) {
      setError('Something went wrong, please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-primary text-white dark:bg-gray-800 dark:text-white">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter to receive the latest updates, stories, and events from SwahiliPot Hub Foundation.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white bg-opacity-20 p-6 rounded-lg dark:bg-gray-700">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
              <p>You'll now receive our latest updates directly to your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-800 dark:text-gray-200 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 transition-colors"
              >
                {isLoading ? 'Submitting...' : 'Subscribe'}
              </button>
            </form>
          )}
          
          {error && <p className="text-sm mt-4 text-red-500">{error}</p>}
          <p className="text-sm mt-4 text-white text-opacity-80">
          We’re committed to protecting your privacy while delivering valuable updates.
          </p>
        </div>
      </div>
    </section>
  );
}
