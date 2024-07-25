import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import SlideImageComponent from "../../components/cart/home-page-components/SlideImageComponent";
import CategoryLocation from "../../components/cart/home-page-components/CategoryLocation";
import HeroSection from "../../components/cart/home-page-components/HeroSection";
import HomeProfile from "../../components/cart/home-page-components/HomeProfile";
import ServiceCard from "../../components/cart/home-page-components/ServiceCard";
import { CartService } from "../../components/cart/CartService";
import StatisticsSection from "../../components/cart/home-page-components/StatisticItem";
import SuggesdedCustomer from "../../components/cart/home-page-components/SuggesdedCustomer";
import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../../redux/feature/service/serviceSlice";
import { Metadata } from '../../lib/Metadata'
import DropdownCategory from "../../components/button/DropdownCategory";

export function HomeNotLogin() {
  const dispatch = useDispatch();
  const cartServiceRef = useRef([]);
  const [inView, setInView] = useState([]);
  const { t } = useTranslation();  // This line is correct
  const services = useSelector((state) => state.services.data);
  const serviceStatus = useSelector((state) => state.services.status);
  const error = useSelector((state) => state.services.error);

  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 10;
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchServices());
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prevInView) => [...prevInView, entry.target]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cartServiceRef.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      cartServiceRef.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div>
      <div>
        <Metadata
          title="Home | TrovKa"
          description="Welcome to TrovKa-Service"
          author="SainaIna"
          keywords="services, trovka, home"
          thumbnail="https://i.ibb.co/s6D2gFC/trovka-icon.png"
        />
      </div>

      <div className="flex">
        <div className="justify-center h-[397px] p-28 flex mt-[50px]">
          <div className="w-[440px] h-[90px] text-lg">
            <HeroSection />
            <CategoryLocation />
          </div>
        </div>
        <div className="mt-[100px]">
          <HomeProfile />
        </div>
      </div>
      
      <div className="mt-[190px] mb-[60px] text-center text-[#022278] dark:text-Secondary font-bold">
        <p className="text-2xl ">{t("Welcome_Services")}</p>
      </div>
      <DropdownCategory/>
      <SlideImageComponent />
      <div className="ml-[100px] mt-10 text-[#022278] dark:text-Secondary text-xl font-semibold">
        <p>{t("All_Category")}</p>
        <div className="mt-[5px] border border-[#022278] dark:border-Secondary mb-[90px] w-[1080px]"></div>
      </div>
      <ServiceCard />
      <div className="ml-[100px] mt-10 text-[#022278] dark:text-Secondary text-xl font-semibold">
        <p>{t("All_Service")}</p>
        <div className="mt-[5px] border border-[#022278] dark:border-Secondary mb-[80px] w-[1080px]"></div>
      </div>
      <div className="flex justify-center gap-[50px]">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {currentServices.map((service) => (
            <CartService
              key={service.id}
              id={service.id}
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
      </div>
    
      <div className="ml-[100px] mt-[80px] text-[#022278] dark:text-Secondary text-xl font-semibold">
        <p>{t("Popular_Service")}</p>
        <div className="mt-[5px] border border-[#022278] dark:border-Secondary mb-[80px] w-[1080px]"></div>
      </div>
      <div className="flex justify-center gap-[40px]">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (cartServiceRef.current[15 + index] = el)}
            className={`transition-transform transition-opacity duration-700 ${
              inView.includes(cartServiceRef.current[15 + index])
                ? "opacity-100 transform scale-100"
                : "opacity-0 transform scale-90"
            }`}
          >
            <CartService />
          </div>
        ))}
      </div>
      <StatisticsSection />
      <SuggesdedCustomer />
    </div>
  );
}

export default HomeNotLogin;
