import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaEdit } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Review = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [reviews, setReviews] = useState([
    { id: 1, date: '7 July, 2024', service: 'Plumbing Services', rate: 3, comments: 'Good' },
    { id: 2, date: '7 July, 2024', service: 'Steam Car Wash', rate: 5, comments: 'New test' },
    { id: 3, date: '7 July, 2024', service: 'Car Repair Services', rate: 2, comments: 'Quick service provided' },
    { id: 4, date: '7 July, 2024', service: 'IT Course', rate: 4, comments: 'Review testing' },
    { id: 5, date: '7 July, 2024', service: 'Computer Repair', rate: 1, comments: 'Poor service' },
  ]);
  const [editingReview, setEditingReview] = useState(null);
  const [editedReview, setEditedReview] = useState({});

  const handleEditClick = (review) => {
    setEditingReview(review.id);
    setEditedReview(review);
  };

  const handleSaveClick = () => {
    const { rate } = editedReview;
    if (rate < 1 || rate > 5) {
      alert('Rating must be between 1 and 5');
      return;
    }
    setReviews(reviews.map(review => (review.id === editedReview.id ? editedReview : review)));
    setEditingReview(null);
  };

  const columns = [
    {
      name: t('Date'),
      selector: row => row.date,
      sortable: true,
    },
    {
      name: t('Service'),
      selector: row => row.service,
      sortable: true,
    },
    {
      name: t('Rate'),
      selector: row => row.rate,
      sortable: true,
    },
    {
      name: t('Cmt'),
      selector: row => row.comments,
      sortable: true,
    },
    {
      name: t('Action'),
      cell: row => (
        <FaEdit
          className="text-blue-500 inline mx-2 cursor-pointer "
          onClick={() => handleEditClick(row)}
        />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const filteredReviews = reviews.filter(review =>
    Object.values(review).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <section className="container mx-auto p-4 w-[1000px] ">
      <h2 className="text-2xl font-bold mb-4">{t('Reviews')}</h2>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded w-1/3 dark:bg-gray-800"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="bg-white shadow rounded-lg p-4 dark:bg-gray-800">
        <h3 className="text-lg font-semibold mb-4 ">{t('List_Reviews')}</h3>
        {editingReview ? (
          <div className="mb-4">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 ">Rate</label>
              <input
                type="number"
                className="border p-2 rounded w-full"
                value={editedReview.rate}
                min={1}
                max={5}
                onChange={e => setEditedReview({ ...editedReview, rate: Math.max(1, Math.min(5, e.target.value)) })}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Comments</label>
              <input
                type="text"
                className="border p-2 rounded w-full "
                value={editedReview.comments}
                onChange={e => setEditedReview({ ...editedReview, comments: e.target.value })}
              />
            </div>
            <button
              onClick={handleSaveClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={filteredReviews}
            pagination
            highlightOnHover
            className="min-w-full bg-white "
          />
        )}
      </div>
    </section>
  );
};

export default Review;
