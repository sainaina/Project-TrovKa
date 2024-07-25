import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {
  fetchServiceReviews,
  selectReviews,
  selectReviewsError,
  selectReviewsStatus,
  postReview,
} from "../../redux/feature/review/reviewSlice";

// Rating Component
const Rating = ({ rating, setRating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) =>
      i < rating ? (
        <FaStar key={i} style={{ color: "#F6B721" }} onClick={() => setRating && setRating(i + 1)} />
      ) : (
        <FaRegStar key={i} style={{ color: "#F6B721" }} onClick={() => setRating && setRating(i + 1)} />
      )
    )}
  </div>
);

// ReviewCard Component
const ReviewCard = ({ name, date, rating, text }) => (
  <div className="p-4 border rounded-lg shadow-sm mb-4">
    <div className="flex justify-between">
      <h3 className="font-semibold">{name}</h3>
      <span className="text-gray-500">{date}</span>
    </div>
    <Rating rating={rating} />
    <p className="text-gray-700 mt-2">{text}</p>
  </div>
);

// AverageRating Component
const AverageRating = ({ averageRating, reviewCounts }) => {
  const { t } = useTranslation();
  const starPercentage = (rating) =>
    (reviewCounts[rating] / Object.values(reviewCounts).reduce((a, b) => a + b, 0)) * 100;

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-semibold text-Primary mb-4 dark:text-[#98caf9]">{t('Average')}</h2>
      <div className="flex items-center mb-2">
        <span className="text-3xl font-medium text-gray-300 ">{averageRating.toFixed(1)}</span>
        <Rating rating={Math.round(averageRating)}/>
      </div>
      <div className="text-gray-300">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center">
            <span className="w-4 text-center">{star}</span>
            <div className="w-full h-2 bg-gray-200 ml-2 mr-2">
              <div className="h-full bg-Secondary" style={{ width: `${starPercentage(star)}%` }}></div>
            </div>
            <span className="w-10 text-right">
              {starPercentage(star).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


const ReviewForm = ({ serviceId, token }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      setErrorMessage("Please log in to submit your review.");
      return;
    }
    const review = {
      comment,
      rate_star: rating,
      service: serviceId,
    };
    dispatch(postReview(review));
    setRating(0);
    setComment("");
    setErrorMessage("");
  };

  return (
    <div className="p-6 border rounded-lg ">
      <h2 className="text-xl font-semibold text-Primary mb-4 dark:text-[#98caf9]">{t('Submit_Comment')}</h2>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-900 dark:gray-300">{t('Add_Your_Rating')}</label>
          <Rating rating={rating} setRating={setRating} />
        </div>
        <div className="mb-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={t('Write_Your_Review')}
            className="w-full p-2 border rounded-md dark:bg-gray-800"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="bg-Secondary text-white px-4 py-2 rounded-md">
        {t('Submit_Review')}
        </button>
      </form>
    </div>
  );
};

const WriteReview = ({ service, token }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const reviewsStatus = useSelector(selectReviewsStatus);
  const reviewsError = useSelector(selectReviewsError);


  useEffect(() => {
    if (reviewsStatus === "idle") {
      dispatch(fetchServiceReviews(service.id));
    }
  }, [dispatch, reviewsStatus, service.id]);

  const filteredReviews = reviews.filter((review) => review.service === service.id);

  // Calculate the average rating
  const validRatings = filteredReviews
    .map((review) => Number(review.rate_star))
    .filter((rating) => !isNaN(rating) && rating >= 0 && rating <= 5);

  const totalRating = validRatings.reduce((acc, rating) => acc + rating, 0);
  const averageRating = validRatings.length > 0 ? totalRating / validRatings.length : 0;

  // Count reviews by star rating
  const reviewCounts = filteredReviews.reduce((acc, review) => {
    const rating = review.rate_star;
    if (!acc[rating]) {
      acc[rating] = 0;
    }
    acc[rating]++;
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto p-4 mb-24 -mt-8">
      {reviewsStatus === "failed" && (
        <div>
          Error loading reviews: {reviewsError} 
          <button onClick={() => dispatch(fetchServiceReviews(service.id))}>Retry</button>
        </div>
      )}
      <div className="block md:grid md:grid-cols-2 gap-4 mb-6">
        <AverageRating 
          averageRating={averageRating} 
          reviewCounts={reviewCounts} 
        />
        <ReviewForm 
          serviceId={service.id} 
          token={token} 
        />
      </div>

      <h2 className="text-xl font-semibold text-Primary mb-4 dark:text-[#98caf9]">{t('Cus_Review')}</h2>
      {filteredReviews.length > 0 ? (
        filteredReviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.created_by}
            date={new Date(review.created_at).toLocaleDateString()}
            rating={review.rate_star}
            text={review.comment}
          />
        ))
      ) : (
        <div>{t('No_Review_Yet')}</div>
      )}
    </div>
  );
};

export default WriteReview;
