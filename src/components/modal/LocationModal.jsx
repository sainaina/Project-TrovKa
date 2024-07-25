import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { postLocation, fetchLocations } from '../../redux/feature/location/locationSlice';

function LocationModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    province: '',
    district: '',
    commune: '',
    village: '',
    postal_code: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const location = `${formData.province}, ${formData.district}, ${formData.commune}, ${formData.village}, ${formData.postal_code}`;
    const submissionData = {
      ...formData,
      location: location
    };
    await dispatch(postLocation(submissionData));
    await dispatch(fetchLocations()); // Fetch locations after adding a new one
    onClose(); // Close the modal after submission
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Location</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Province</label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Commune</label>
            <input
              type="text"
              name="commune"
              value={formData.commune}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Village</label>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Postal Code</label>
            <input
              type="text"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="flex justify-center items-center px-4 py-2 mr-2 bg-gray-500 text-white rounded shadow">
              <FaTimes className="mr-2" />
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-Primary flex justify-center items-center text-white rounded shadow">
              <FaCheck className="mr-2" />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LocationModal;
