'use client';

import Image from 'next/image';

export default function Preview() {
  return (
    <section className="bg-gray-100 py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          See work come together
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Visualize and manage your projects with boards, lists, timelines, and calendars—all in one place. Stay updated with real-time progress.
        </p>

        <div className="rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto">
          <Image
            src="/images/preview-tasks.jpg" 
            alt="Task & Project Preview"
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
