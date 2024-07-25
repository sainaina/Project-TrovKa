import React from 'react';
import { useTranslation } from "react-i18next";

export const ServiceDescription = ({ service }) => {
  const { t } = useTranslation();
  return (
    <div className="p-[6rem] pb-5 -mt-[120px]">
      <h2 className="font-semibold border-b-[2px] dark:text-[#98caf9] border-spacing-y-1 border-[#D9D9D9] text-Primary mb-4 text-[24px]">
        {t('Service_Detail')}
      </h2>
      <p >{service.description}</p>
    </div>
  );
};
