'use client';
import { Button } from '../common/Button';

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Simplify task management <br />
          <span className="text-gray-900">and prioritize work</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
          Asana is the leading software for project management, according to G2<sup>1</sup>. See all your work in one place so you can prioritize what matters most.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="primary">Get started</Button>
          <Button variant="secondary">Request a demo</Button>
        </div>
      </div>
    </section>
  );
}
