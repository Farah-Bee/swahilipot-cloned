import { useState } from 'react';
import Link from 'next/link';

export default function InnerNav() {
  const [activeTab, setActiveTab] = useState('careers');
  
  const tabs = [
    { id: 'careers', label: 'Careers' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'partner', label: 'Partner With Us' },
    { id: 'internships', label: 'Internships' }
  ];

  return (
    <div className="bg-blue-50 dark:bg-gray-800 shadow-md mb-8">
      <div className="container-custom mx-auto">
        <div role="tablist" className="flex overflow-x-auto space-x-6 md:space-x-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors duration-200 ease-in-out ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary dark:text-white dark:border-white'
                  : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
