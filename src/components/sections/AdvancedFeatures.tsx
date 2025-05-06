'use client';

import Image from 'next/image';

export default function AdvancedFeatures() {
  return (
    <section className="bg-gray-100 py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Go deeper with advanced features
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Take your project management to the next level with built-in tools for visibility, automation, and planning.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>📅 Project Timeline for roadmap planning</li>
            <li>📆 Calendar to view workload and deadlines</li>
            <li>⚙️ Rules to automate routine actions</li>
            <li>🔗 Task dependencies for clear execution order</li>
            <li>⏱️ Time tracking and custom fields</li>
          </ul>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/advanced-features.png" 
              alt="Advanced Features Preview"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
