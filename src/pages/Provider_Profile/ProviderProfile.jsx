import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceById, fetchServices, selectService, selectServices, selectServiceStatus } from '../../redux/feature/service/serviceSlice';
import AboutProvider from "../../components/layout/AboutProvider";
import ProfileNew from "../../components/layout/ProfileNew";
import CustomerReview from "../../components/common/CustomerReview";
import HorizontalCard from '../../components/cart/HorizontalCard';
import { useTranslation } from "react-i18next";

const ProviderProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const service = useSelector(selectService);
  const services = useSelector(selectServices);
  const serviceStatus = useSelector(selectServiceStatus);
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      dispatch(fetchServiceById(id));
    }
    dispatch(fetchServices());
  }, [dispatch, id]);

  if (serviceStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (serviceStatus === 'failed') {
    return <div>Error loading service details</div>;
  }

  const filteredServices = services.filter(svc => svc.created_by.id === service?.created_by?.id);

  return (
    <>
      <div>
        {service && (
          <>
            <ProfileNew createdBy={service.created_by} />
            <AboutProvider description={service.description} />
          </>
        )}
      </div>
      <div className=" -mt-20">
        <div className="p-[6rem] ">
          <h2 className="font-semibold border-b-[1px] border-spacing-y-1 border-[#D9D9D9] text-Primary mb-4 text-[24px]">{t('Service')}</h2>
        </div>
        <div className="px-16 -mt-20">
          {filteredServices.map((service) => (
            <HorizontalCard
              key={service.id}
              image={service.image}
              name={service.name}
              created_at={service.created_at}
              description={service.description}
              category={service.category}
              location={`${service.location.province}, ${service.location.district}, ${service.location.commune}, ${service.location.village}, ${service.location.postal_code}`}
              working_days={Array.isArray(service.working_days) ? service.working_days.join(', ') : service.working_days}
            />
          ))}
        </div>
      </div>

      <div className="p-[6rem] -mt-20">
        <h2 style={{ color: "#032278" }} className="border-b-[1px] border-[#D9D9D9] font-semibold text-[24px]">{t('Cus_Review')}</h2>
        <div className="mt-[30px] mb-[3rem]">
          <CustomerReview />
        </div>
      </div>
    </>
  );
};

export default ProviderProfile;
