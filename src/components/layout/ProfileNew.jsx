import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaPhone } from 'react-icons/fa';

const ProfileNew = ({ createdBy }) => {
  if (!createdBy) return null; // Ensure createdBy is available

  return (
    <div>
        <div className="h-40 flex flex-col items-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 py-8 w-full">
      </div>
      
        <div className="bg-white rounded-lg overflow-hidden w-full mt-22 border-b ">
        <div className="flex flex-col md:flex-row items-center justify-between p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img
                className="rounded-full w-32 h-32 object-cover"
                src={createdBy.avatar || ".//src/assets/image/profile.png"}
                alt="Profile"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">Emma Smith</h2>
              <p className="text-gray-500">Service name</p>
              <div className="flex items-center gap-2 text-gray-500 mt-2 justify-center md:justify-start">
                <FaMapMarkerAlt />
                <p>{createdBy.location || "Unknown Location"}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mt-2 justify-center md:justify-start hover:text-green-500 transition duration-300 transform hover:scale-105">
                <FaCalendarAlt />
                <p>Joined {createdBy.created_at ? new Date(createdBy.created_at).toLocaleDateString() : "Unknown"}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mt-2 justify-center md:justify-start hover:text-yellow-500 transition duration-300 transform hover:scale-105">
                <FaStar />
                <p>{createdBy.rating || "No Rating"}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-0">
            {/* <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">Message</button> */}
            <button className="px-4 py-2 bg-Primary text-white rounded-lg hover:bg-blue-800 flex items-center gap-2">
              <FaPhone />
              Contact: {createdBy.phone || 'N/A'}
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around py-4 border-t border-gray-200">
          <div className="text-center p-4">
            <p className="text-2xl font-semibold text-Primary">351</p>
            <p className="text-gray-500">Reviews</p>
          </div>
          <div className="text-center p-4">
            <p className="text-2xl font-semibold text-Primary">2</p>
            <p className="text-gray-500">Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNew;
