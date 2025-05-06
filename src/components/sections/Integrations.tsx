'use client';

import Image from 'next/image';

const integrations = [
  { name: 'Gmail', src: '/images/gmail.png' },
  { name: 'Zoom', src: '/images/zoom.png' },
  { name: 'Slack', src: '/images/slack.png' },
  { name: 'Teams', src: '/images/teams.png' },
  { name: 'Jira', src: '/images/jira.png' },
  // Add more as needed
];

export default function Integrations() {
  return (
    <section className="bg-white py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Integrate with the tools you already use
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Asana connects with over 200+ tools so you can manage your work without switching tabs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center items-center">
          {integrations.map((tool) => (
            <div key={tool.name} className="opacity-80 hover:opacity-100 transition">
              <Image
                src={tool.src}
                alt={`${tool.name} logo`}
                width={80}
                height={80}
                className="object-contain h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
