import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceById, selectService, selectServiceStatus } from '../../redux/feature/service/serviceSlice';
import ContactInfo from '../../components/provider-components/ContactInfo';
import WriteReview from '../../components/provider-components/WriteReview';
import ServiceProviderCard from '../../components/provider-components/ServiceCover';
import { Metadata } from "../../lib/Metadata";
import{ ServiceDescription } from '../../components/provider-components/ServiceDescription';
import LoadingComponent from '../../components/common/LoadingComponent';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const service = useSelector(selectService);
  const serviceStatus = useSelector(selectServiceStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchServiceById(id));
    } else {
      console.error('Service ID is undefined');
    }
  }, [dispatch, id]);

  if (serviceStatus === 'loading') {
    return <LoadingComponent/>
  }

  if (serviceStatus === 'failed') {
    return <div>Error loading service details</div>;
  }

  return (
    <>
      <Metadata
        title="Service Detail | TrovKa"
        description="Welcome to Service-TrovKa"
        author="SainaIna"
        keywords="services, trovka, home"
        thumbnail="./src/assets/logo/Trovka-icon.png"
      />
      <ServiceProviderCard service={service} />
      <ServiceDescription service={service} />
      <ContactInfo service={service} />
      <WriteReview service={service} />
    </>
  );
};

export default ServiceDetailPage;
