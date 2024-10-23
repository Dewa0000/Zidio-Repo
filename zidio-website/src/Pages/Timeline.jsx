import React from 'react';

const events = [
  { year: "2020", title: "Zidio Founded", description: "Zidio was established to provide innovative learning solutions." },
  { year: "2021", title: "First Major Project", description: "Delivered the first major project for a Fortune 500 company." },
  { year: "2022", title: "Team Expansion", description: "Zidio expanded its team with industry leaders." },
  { year: "2023", title: "Award Recognition", description: "Zidio won the Best Tech Startup award." }
];

const Timeline = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-black py-16">
      <h2 className="text-4xl font-extrabold text-white text-center mb-12">Zidio's Journey</h2>
      <div className="container mx-auto">
        {events.map((event, index) => (
          <div key={index} className="mb-12 flex flex-col md:flex-row items-center">
            <div className="flex justify-center items-center w-16 h-16 bg-white text-blue-600 font-bold text-lg rounded-full shadow-md transform transition-transform hover:scale-110">
              {event.year}
            </div>
            <div className="ml-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;