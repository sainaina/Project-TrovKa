import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiSearchLine } from "react-icons/ri";
import { FaList } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { Pagination } from "../../components/common/Pagination";
import HorizontalCard from "../../components/cart/HorizontalCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../redux/feature/service/serviceSlice";
import LoadingComponent from "../../components/common/LoadingComponent";
import SlideService from "../../components/animation/SlideService";
import { useTranslation } from "react-i18next";
import { Metadata } from '../../lib/Metadata'

export const SearchFilterHorizontal = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.data);
  const serviceStatus = useSelector((state) => state.services.status);
  const error = useSelector((state) => state.services.error);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [sortBy, setSortBy] = useState("All");
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(6);
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(
        fetchServices(
          sortBy === "All" ? "" : sortBy,
          category === "All" ? "" : category
        )
      );
    };

    fetchData();
  }, [sortBy, category, currentPage, dispatch]);

  const toggleSortByDropdown = () => {
    setIsSortByOpen(!isSortByOpen);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleGridNavigate = () => {
    navigate("/service");
  };

  const handleSortBy = (criteria) => {
    setSortBy(criteria);
    setCurrentPage(1);
    setIsSortByOpen(false);
  };

  const handleCategory = (cat) => {
    setCategory(cat);
    setCurrentPage(1);
    setIsCategoryOpen(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = () => {
    dispatch(fetchServices(searchQuery));
    setCurrentPage(1);
  };

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );
  const totalPages = Math.ceil(services.length / servicesPerPage);

  if (serviceStatus === "loading") {
    return <LoadingComponent />;
  }

  if (serviceStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Metadata
        title="Service | TrovKa"
        description="Welcome to TrovKa-Service"
        author="SainaIna"
        keywords="services, trovka, home"
        thumbnail="https://i.ibb.co/s6D2gFC/trovka-icon.png"
      />
      <div className="w-full overflow-hidden mt-12 px-24">
        <SlideService />
        <div className="ml-[43px] h-[90px] flex mt-6">
          <div className="w-[50%] h-[100%] mt-4">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              {t("Search")}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-2xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={t("Enter_the_Category")}
                required
              />
              <button
                type="submit"
                className="absolute end-2.5 bottom-2.5 text-white bg-Secondary hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#022278] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {t("Search")}
              </button>
            </div>
          </div>
          <div className="px-5 h-[90px] w-[50%] z-20 mt-2">
            <ul className="flex justify-center ml-[58px]">
              <div className="relative ">
                <button
                  onClick={toggleSortByDropdown}
                  className="flex justify-between border rounded-[8px] border-gray-300 w-[150px] pl-2 py-2 mr-5 mt-2 text-gray-500"
                >
                  {sortBy ? sortBy : "Sort By"}{" "}
                  <RiArrowDropDownLine className="text-3xl" />
                </button>
                {isSortByOpen && (
                  <ul className="absolute block bg-white border border-gray-500 dark:bg-gray-700 dark:border-gray-600 rounded-lg w-[150px] mt-2">
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black"
                      onClick={() => handleSortBy("All")}
                    >
                      All
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black"
                      onClick={() => handleSortBy("Restaurants")}
                    >
                      Restaurants
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black"
                      onClick={() => handleSortBy("Home services")}
                    >
                      Home Services
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black"
                      onClick={() => handleSortBy("Auto services")}
                    >
                      Auto Services
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black"
                      onClick={() => handleSortBy("Electronics")}
                    >
                      Electronics
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black"
                      onClick={() => handleSortBy("Education")}
                    >
                      Education
                    </li>
                  </ul>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={toggleCategoryDropdown}
                  className="flex justify-between border rounded-[8px] border-gray-300 w-[120px] pl-2 py-2 mr-5 mt-2 text-gray-500"
                >
                  {category ? category : "Category"}{" "}
                  <RiArrowDropDownLine className="text-3xl" />
                </button>
                {isCategoryOpen && (
                  <ul className="absolute bg-white block border dark:bg-gray-700 border-gray-500 dark:border-gray-600 rounded-lg w-[120px] mt-2">
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black"
                      onClick={() => handleCategory("All")}
                    >
                      All
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black"
                      onClick={() => handleCategory("Category 1")}
                    >
                      Category 1
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black"
                      onClick={() => handleCategory("Category 2")}
                    >
                      Category 2
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-gray-200 hover:dark:text-black"
                      onClick={() => handleCategory("Category 3")}
                    >
                      Category 3
                    </li>
                  </ul>
                )}
              </div>

              <button
                onClick={handleGridNavigate}
                className="flex justify-center border border-gray-300 w-[50px] h-[48px] rounded-l-lg text-black pt-4 mt-2"
              >
                <TbGridDots className="dark:text-white" />
              </button>

              <button className="flex justify-center border border-gray-300 w-[50px] h-[48px] rounded-r-lg text-white pt-4 mt-2 bg-Secondary dark:bg-Primary">
                <FaList />
              </button>
            </ul>
          </div>
        </div>

        {services.length === 0 ? (
          <div className="mt-4 text-center text-gray-400">
            No services found.
          </div>
        ) : (
          <div className="flex justify-around flex-wrap ">
            {currentServices.map((service) => (
              <HorizontalCard
                key={service.id}
                image={service.image}
                name={service.name}
                created_at={service.created_at}
                description={service.description}
                category={service.category}
                location={service.location.province}
                working_days={service.working_days}
              />
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};
