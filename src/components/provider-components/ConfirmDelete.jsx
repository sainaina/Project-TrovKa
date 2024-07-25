// ConfirmationModal.js
import React from 'react';

const ConfirmDelete = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p>Are you sure you want to delete this service?</p>
        <div className="mt-4">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
