import React from 'react';

interface StatsProps {
  stats: {
    label: string;
    value: string;
  }[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16 bg-primary text-white dark:bg-gray-800 text-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Impact in Numbers</h2> {/* Reduced font size from 3xl to 2xl */}
          <p className="text-lg max-w-3xl mx-auto">
            The Creatives Department has made significant contributions to SwahiliPot Hub's mission.
          </p>
          <h5 className="text-sm"> (All metrics recorded are upto May 2024)</h5>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div> {/* Reduced font size from 4xl to 3xl */}
              <div className="text-lg">{stat.label}</div> {/* Reduced font size from xl to lg */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
