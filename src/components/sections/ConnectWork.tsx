'use client';

import Image from 'next/image';

export default function ConnectWork() {
  return (
    <section className="bg-white py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Align work to company goals
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Connect every project and task to top-level objectives. With Asana’s work graph, teams stay focused and aligned with real-time visibility.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>📌 Visualize dependencies across teams</li>
            <li>🎯 Ensure tasks support company goals</li>
            <li>📊 Track progress at a glance</li>
          </ul>
        </div>

        {/* Image Preview */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/connect-work.png" 
              alt="Work Alignment Preview"
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
