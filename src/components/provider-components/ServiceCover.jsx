import React, { useEffect } from "react";
import { FaStar, FaPhoneAlt, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ServiceProviderCard = ({ service }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    console.log("Service data:", service);
  }, [service]);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  const handleAddToFavorites = () => {
    // Implement the logic for adding to favorites here
    console.log("Added to favorites");
  };

  const createdBy = service.created_by || {};
  const locationBy = service.location || {};

  return (
    <div className="mx-auto p-24 flex space-x-4 -mt-14 ">
      <div className="flex-1 w-[700px]">
        <img
          src={service.image || "default-image-path.jpg"}
          alt="Service"
          className="w-[700px] h-[400px] rounded-md object-cover transition-transform duration-300 hover:scale-105 hover:shadow-md"
        />
      </div>
      <div className="w-[400px] bg-white dark:bg-gray-800 p-4 rounded-md  shadow-lg transition-shadow duration-300 hover:shadow-2xl ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium dark:text-gray-200">{t("Service_Provider")}</h3>
          <button
            onClick={handleAddToFavorites}
            className="flex items-center text-Secondary border border-Secondary dark:bg-gray-800 px-2 py-1 rounded-md transition-transform duration-300 hover:scale-110 hover:bg-gray-100"
          >
            <FaHeart className="mr-1" />
            {t("Add_to_Fav")}
          </button>
        </div>
        <div
          className="flex items-center mb-4 cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => handleButtonClick(`/provider-profile/${service.id}`)}
        >
          <img
            src={createdBy.avatar || ".///src/assets/image/profile.png"}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-3 object-cover"
          />
          <div>
            <h4 className="text-lg font-medium transition-colors duration-300 hover:text-Secondary">
              {createdBy.username || "Unknown"}
            </h4>
            <p className="text-sm text-gray-400">
              {t("Member_since")}{" "}
              {new Date(createdBy.created_at).getFullYear() || "N/A"}
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex text-Secondary">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-sm text-gray-500 ml-2 dark:text-gray-400">(120 reviews)</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-medium dark:text-gray-200">
            {service.name || "Service Name"}
          </h4>
          <p className="text-sm text-gray-500 transition-transform duration-300 dark:text-gray-400 hover:translate-x-1 hover:text-Secondary">
            {locationBy.province || "Unknown Location"}
          </p>
          <span className="inline-block bg-Secondary text-white px-2 py-1 rounded-md text-xs mt-1 transition-transform duration-300 hover:scale-105 hover:bg-opacity-80">
            {service.categoryType || "Unknown Category"}
          </span>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-medium">
            {t("Price")} ${service.price != null ? service.price : "N/A"}
          </h4>
        </div>
        <button className="w-full bg-Primary text-white px-4 py-2 rounded-md flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-opacity-90">
          <FaPhoneAlt className="mr-2" />
          {t("Phone")} : {service.phone_number || "N/A"}
        </button>
      </div>
    </div>
  );
};

export default ServiceProviderCard;
