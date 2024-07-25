import React, { useState } from 'react';
import { FaStar, FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const CartService = ({
  id,
  image,
  name,
  created_at,
  description,
  category,
  location,
  working_days,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    navigate(`/service-detail/${id}`);
  };

  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <div className='w-full h-full flex justify-center items-center'>
        <div 
          className='w-[320px] h-[455px] rounded-xl shadow-sm  mt-5 dark:bg-gray-700 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer'
          onClick={handleCardClick}
        >
          <div className='relative w-full h-[200px] rounded-t-lg overflow-hidden'>
            <img src={image || "https://i0.wp.com/sigmamaleimage.com/wp-content/uploads/2023/03/placeholder-1-1.png?resize=768%2C512&ssl=1"} alt={name} className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' />
          </div>
          <div className="flex flex-col p-6 h-[calc(100%-200px)] justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-[18px] font-medium text-gray-800 line-clamp-1 dark:text-gray-200">{name}</p>
                  <p className='text-sm'>{new Date(created_at).toLocaleDateString()}</p>
                </div>
                <div onClick={(e) => { e.stopPropagation(); toggleFavorite(); }} className="cursor-pointer -translate-y-1">
                  {isFavorite ? <FaHeart className="text-2xl text-red-500" /> : <FaRegHeart className="text-2xl text-gray-400 hover:text-red-500 transition-colors duration-300 dark:text-gray-200" />}
                </div>
              </div>
              <p className="text-gray-700 mb-4 line-clamp-2 dark:text-gray-200">{description}</p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="flex text-Secondary">
                  {[...Array(4)].map((_, i) => <FaStar key={i} />)}
                  <FaRegStar />
                </div>
                <div className="ml-2 px-2 py-1 bg-Secondary text-white text-sm rounded-md">4/5</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="bg-[#022278] text-white text-sm px-3 py-1 rounded-md">{category}</div>
                <div className="text-right -translate-y-1">
                  <div className="text-sm text-gray-500 dark:text-gray-200">{location}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-200">{working_days}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartService;
