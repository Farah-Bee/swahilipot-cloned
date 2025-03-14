import Link from 'next/link';

interface RoleDescriptionProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  applicationLink: string;
}

export default function RoleDescription({
  title,
  department,
  location,
  type,
  description,
  responsibilities,
  qualifications,
  applicationLink
}: RoleDescriptionProps) {
  return (
    <div className="bg-blue-50 dark:bg-gray-900 p-8 rounded-lg shadow-md mb-8 transition-all hover:shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-orange-50 dark:bg-orange-600 text-gray-700 dark:text-white px-3 py-1 rounded-full">
            {department}
          </span>
          <span className="bg-orange-50 dark:bg-orange-600 text-gray-700 dark:text-white px-3 py-1 rounded-full">
            {location}
          </span>
          <span className="bg-orange-50 dark:bg-orange-600 text-gray-700 dark:text-white px-3 py-1 rounded-full">
            {type}
          </span>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Responsibilities</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Qualifications</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          {qualifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div>
        {/* Corrected the Link component usage */}
        <Link href={applicationLink} className="btn bg-primary text-white hover:bg-primary-dark px-6 py-3 rounded-md text-center transition-colors">
          Apply Now
        </Link>
      </div>
    </div>
  );
}
