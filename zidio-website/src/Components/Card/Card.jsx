import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ course }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = course.description;
  if (!showFullDescription) {
    description = description.substring(0, 6) + '...';
  }

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
      <p className="text-gray-300">{course.level}</p>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-col items-center space-y-6"> {/* Flex column and more space between buttons */}
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="w-full max-w-xs bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-400 transition-transform hover:scale-105"
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>
        <Link to="/JobsPage" className="w-full max-w-xs bg-green-500 text-white px-6 py-3 rounded hover:bg-green-400 transition-transform hover:scale-105">
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default Card;
