'use client';

import Image from 'next/image';

export default function Automation() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Placeholder */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <Image
              src="/images/automation-placeholder.png" // Replace with actual image
              alt="Automation Tools"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Automate routine work
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Spend less time on manual tasks and more time on strategic work. With Asana, you can integrate with Slack, Gmail, and Microsoft Teams to streamline workflows.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Automate approvals and updates</li>
            <li>✅ Trigger notifications in Slack or Teams</li>
            <li>✅ Reduce time spent on email follow-ups</li>
            <li>✅ Customize flows with rules and conditions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
