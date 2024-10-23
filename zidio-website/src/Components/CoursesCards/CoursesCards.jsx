import React from 'react';
import Card from '../Card/Card';
import courses from '../../Courses.json';

const CoursesCards = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-black py-16 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-extrabold text-white mb-12">Popular Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesCards;
