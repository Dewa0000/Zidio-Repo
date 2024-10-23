import React from 'react';
import ReactPlayer from 'react-player';
import myVideo from '../assets/myVideo.mp4';

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-black min-h-screen flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl text-white font-bold mb-8">Our Services</h2>
      <div className="w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
        <ReactPlayer url={myVideo} controls width="100%" className="rounded-lg" />
      </div>
      <p className="text-white mt-6">Watch our introductory video to learn more about what we offer!</p>
    </div>
  );
};

export default Services;
