import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = ({ service }) => {
  if (!service) {
    return <div>Loading...</div>; 
  }

  const workingDays = service.working_days ? service.working_days.split('-') : [];
  const startTime = service.start_time || "N/A";
  const endTime = service.end_time || "N/A";
  const { t } = useTranslation();

  return (
    <div className="p-[6rem] -mt-16 ">
      <h2  className="text-[#022278] dark:text-[#98caf9] border-b-2 border-[#D9D9D9] font-semibold text-[24px] ">
        {t('Contact_Info')}
      </h2>
      <div className="flex mt-[30px]">
        <div className="w-[500px]">
          <img src="https://cityofwater.wordpress.com/wp-content/uploads/2012/08/screen-shot-2012-08-01-at-11-23-12-am.png" alt="Map" />
        </div>

        <div className="ml-[2rem]">
          
          <div className="gap-[20rem] flex">
            <ul>
              {workingDays.map((day, index) => (
                <li key={index} className="mb-[10px]">{day}</li>
              ))}
            </ul>
            <ul>
              {workingDays.map((_, index) => (
                <li key={index} className="mb-[10px]">
                  {startTime} - {endTime}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[1rem]">
            <h2 className="font-semibold text-[#022278] dark:text-[#98caf9]">{t('Address')}</h2>
            <p>Russian Federation Blvd (110), Phnom Penh 120404</p>
            <h2  className="font-semibold text-[#022278] dark:text-[#98caf9]">{t('Email')}</h2>
            <p >zohansmth@gmail.com</p>
            <h2 className="font-semibold text-[#022278] dark:text-[#98caf9]">{t('Phone')}</h2>
            <p >{service.phone_number || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
