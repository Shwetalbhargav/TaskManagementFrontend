'use client';

import Image from 'next/image';

const templates = [
  {
    title: 'QBR Template',
    description: 'Plan quarterly business reviews with ease.',
    icon: '/images/template-qbr.jpg',
  },
  {
    title: 'Marketing Plan',
    description: 'Track campaigns, launches, and budgets.',
    icon: '/images/template-marketing.jpg',
  },
  {
    title: 'Product Roadmap',
    description: 'Visualize product strategy and delivery.',
    icon: '/images/template-roadmap.png',
  },
  // Add more templates as needed
];

export default function Templates() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Get started faster with templates
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Whether you're launching a campaign or planning a sprint, Asana templates give you a head start.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {templates.map((tpl, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={tpl.icon}
                  alt={`${tpl.title} icon`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-800">{tpl.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{tpl.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
