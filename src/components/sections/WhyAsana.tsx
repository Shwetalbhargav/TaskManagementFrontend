'use client';

export default function WhyAsana() {
  const stats = [
    {
      percent: '54%',
      description: 'report increased efficiency in cross-functional work',
    },
    {
      percent: '41%',
      description: 'report reduction in time spent on routine tasks',
    },
    {
      percent: '82%',
      description: 'report greater visibility into team work',
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          What teams achieve with Asana
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-5xl font-bold text-purple-700 mb-4">
                {stat.percent}
              </span>
              <p className="text-gray-600 text-lg max-w-xs">{stat.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-gray-400 italic">
          Source: IDC White Paper, Sponsored by Asana, The Business Value of Asana, 2023
        </p>
      </div>
    </section>
  );
}
