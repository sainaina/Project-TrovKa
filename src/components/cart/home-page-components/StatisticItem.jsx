import React from "react";
import { useTranslation } from "react-i18next";

const StatisticItem = ({ value, label, color }) => (
  <div className="flex flex-col self-end mt-5">
    <div className={`self-center text-6xl ${color} max-md:text-4xl`}>
      {value}
    </div>
    <div className="mt-9 text-2xl text-white max-md:mt-10">{label}</div>
  </div>
);

const StatisticsSection = () => {
  const { t } = useTranslation();

  const statisticsData = [
    { value: "5", label: t("Category"), color: "text-white" },
    { value: "36", label: t("Providers"), color: "text-cyan-300" },
    { value: "36", label: t("Customers"), color: "text-lime-600" },
  ];

  return (
    <section className="flex justify-center mx-[100px] my-[80px] mb-[70px] items-center py-[70px] font-light bg-[#022278] rounded-[40px] max-md:px-5">
      <div className="flex flex-col w-full max-w-[881px] max-md:max-w-full">
        <h2 className="self-center text-3xl text-white max-md:max-w-full">
          {t('Trust')}
        </h2>
        <div className="flex gap-5 justify-between items-start mt-[30px] whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          {statisticsData.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <StatisticItem
                value={stat.value}
                label={stat.label}
                color={stat.color}
              />
              {index < statisticsData.length - 1 && (
                <div className="shrink-0 w-0.5 bg-white border-2 border-white border-solid h-[118px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
