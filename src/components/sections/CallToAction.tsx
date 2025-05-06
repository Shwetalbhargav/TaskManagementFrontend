'use client';

import { Button } from '../common/Button';

export default function CallToAction() {
  return (
    <section className="bg-black py-20 text-white text-center px-4 md:px-0">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to simplify your work?
        </h2>
        <p className="text-lg mb-8">
          Join thousands of teams using Asana to manage work faster and smarter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" className="bg-white text-black hover:bg-gray-200">
            Get Started
          </Button>
          <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-black">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
