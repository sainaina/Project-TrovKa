import { Carousel } from "flowbite-react";

const SlideService = () => {
  return (
    <div className="sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img src="https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150359022.jpg?t=st=1721617628~exp=1721621228~hmac=7d7fdc34c091c455f8a34f7fad275edfa0c5be2110e52f0f10dfbfa434885700&w=996" alt="..." />
        <img src="https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19603.jpg?t=st=1721618087~exp=1721621687~hmac=d71d021f8af5fe806260508ffdd04543e9a824ccd79a3836d7833eb5dded4116&w=1060" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
};

export default SlideService;
