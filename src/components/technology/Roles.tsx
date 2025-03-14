import React from 'react';

interface Role {
  title: string;
  description: string;
  requirements: string[];
}

interface RolesProps {
  roles: Role[];
}

export default function Roles({ roles }: RolesProps) {
  // Define an array of light background color classes
  const bgClasses = ["bg-blue-50", "bg-orange-50", "bg-yellow-50"];
  
  return (
    <section className="py-16 bg-light dark:bg-gray-900">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4"> The Technology Department Roles</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the various roles within our Technology Department and the skills required for each position.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div 
              key={index} 
              className={`${bgClasses[index % 3]} dark:bg-gray-700 rounded-lg shadow-md overflow-hidden`}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3">{role.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{role.description}</p>
                
                <h6 className="font-medium mb-2">Roles:</h6>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  {role.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
