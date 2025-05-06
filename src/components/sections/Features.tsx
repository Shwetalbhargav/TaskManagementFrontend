'use client';

import Image from 'next/image';

export default function Features() {
  return (
    <section className="bg-white py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Feature Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful task & project features
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Manage tasks at scale with features built for fast-moving teams. Assign tasks, tag priorities, track dependencies, and more.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Assign owners and due dates</li>
            <li>✅ Use tags, priorities, and custom fields</li>
            <li>✅ Connect tasks to multiple projects (multi-homing)</li>
            <li>✅ View in list, board, or calendar format</li>
          </ul>
        </div>

        {/* Feature Screenshot */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/feature-tasks.png" // Replace with actual UI screenshot
              alt="Task Feature Preview"
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
