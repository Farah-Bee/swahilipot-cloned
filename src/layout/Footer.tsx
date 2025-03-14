import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0077b6] dark:bg-gray-900 text-white pt-12 pb-6"> {/* Ocean blue background */}
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-40">
                <Image 
                  src="/images/logo.png" 
                  alt="SwahiliPot Hub Logo" 
                  width={160} 
                  height={40} 
                  className="brightness-0 invert"
                />
              </div>
            </Link>
            <p className="mt-4 hover:text-yellow-400">
              SwahiliPot Hub is a collaborative space for technology, arts, and culture in Mombasa, Kenya.
            </p>

            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/swahilipothub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://facebook.com/swahilipothub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://instagram.com/swahilipothub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/swahilipot-hub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.59 3C2.72 3 2 3.72 2 4.59v14.82c0 .87.72 1.59 1.59 1.59h16.83c.87 0 1.59-.72 1.59-1.59V4.59c0-.87-.72-1.59-1.59-1.59H3.59zM7.73 18H4.83V9.5h2.9v8.5zM6.28 8.67c-.94 0-1.7-.77-1.7-1.7s.76-1.7 1.7-1.7c.94 0 1.7.77 1.7 1.7s-.76 1.7-1.7 1.7zM19.17 18h-2.9v-4.9c0-1.17-.42-1.97-1.46-1.97-.79 0-1.26.53-1.47 1.05-.08.19-.1.45-.1.71v4.1h-2.9V9.5h2.9v1.2h.04c.4-.74 1.13-1.2 2.1-1.2 1.61 0 2.88 1.05 2.88 3.32v5.18z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 hover:text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-yellow-400">About Us</Link>
              </li>
              <li>
                <Link href="/programs/events" className="hover:text-yellow-400">Events</Link>
              </li>
              <li>
                <Link href="/spaces/SpacesLayout" className="hover:text-yellow-400">Spaces</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 hover:text-yellow-400">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/swahili-tech-women" className="hover:text-yellow-400">Swahili Tech Women</Link>
              </li>
              <li>
                <Link href="/programs/case-management" className="hover:text-yellow-400">Case Management</Link>
              </li>
              <li>
                <Link href="/programs/campus_ambassador" className="hover:text-yellow-400">Campus Ambassador</Link>
              </li>
             
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 hover:text-yellow-400">Contact</h3>
            <address className="not-italic">
              <p>SwahiliPot Hub Foundation</p>
              <p>Mombasa, Kenya</p>
              <p className="mt-2">
                <a href="mailto:info@swahilipothub.co.ke" className="hover:text-yellow-400">info@swahilipothub.co.ke</a>
              </p>
              <p>
                <a href="tel:+254114635505" className="hover:text-yellow-400">+254 11 4635505</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} SwahiliPot Hub Foundation. Mombasa, Kenya. All rights reserved.
          </p>
          <p className="text-center text-sm mt-2">
            Proudly made by <a href="https://github.com/ianmuriuki" className="hover:text-yellow-400" target="_blank" rel="noopener noreferrer">The Alchemy</a>
          </p>

        </div>
      </div>
    </footer>
  );
}
