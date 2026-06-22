import React from 'react';

import { Calendar } from "@/components/ui/calendar"

const About = () => {
  return (
    <div>
      {/* Heading at top center */}
      <h2 className="text-4xl font-bold text-center mt-10 mb-10">
       <Calendar
    mode="single"
  
    className="rounded-lg border"
  />
      </h2>

      <section className="px-10 py-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Circular Image */}
        <div className="flex justify-center">
          <img
            src="/pp.jpg"
            alt="About"
            className="w-64 h-48 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* About Text */}
        <div>
          <p className="text-gray-600 text-lg leading-8">
            I am a full-stack developer focused on building modern,
            scalable, and visually rich web applications using React,
            Node.js, Express.js, MongoDB, and Tailwind CSS.
          </p>
        </div>

      </section>
    </div>
  );
};

export default About;