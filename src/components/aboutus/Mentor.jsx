import { Avatar } from "@material-tailwind/react";

export function Mentor() {
  return (
    <div className="flex flex-wrap gap-[200px] justify-center mt-[90px] mb-[90px] gap-8">
      {/* Profile 1 */}
      <div className="flex flex-col items-center">
        <Avatar
          src="./public/image/image1/cher-phea.jpg"
          alt="avatar"
          withBorder={true}
          className="w-[150px] h-[150px] px-[10px] py-[10px] sm:w-[200px] sm:h-[200px] rounded-full "
        />
        <div className="mt-4 text-center">
          <h2 className="text-lg sm:text-xl">Sin SreyPhea</h2>
          <h3 className="text-sm sm:text-base text-Primary dark:text-Action my-[5px]">Frontend Developer</h3>
          <div className="flex justify-center gap-4 mt-[12px]">
            <img src="./public/image/icon/github.svg" className="w-8 h-8" />
            <img src="./public/image/icon/facebook.svg" className="w-8 h-8" />
            <img src="./public/image/icon/square-instagram.svg" className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Profile 2 */}
      <div className="flex flex-col items-center">
        <Avatar
          src="./public/image/image1/cher-keo.jpg"
          alt="avatar"
          withBorder={true}
          className="w-[150px] h-[150px] px-[10px] py-[10px] sm:w-[200px] sm:h-[200px] rounded-full"
        />
        <div className="mt-4 text-center">
          <h2 className="text-lg sm:text-xl">Kang Keo</h2>
          <h3 className="text-sm sm:text-base text-Primary dark:text-Action my-[5px]">Frontend Developer</h3>
          <div className="flex justify-center gap-4 mt-[12px]">
            <img src="./public/image/icon/github.svg" className="w-8 h-8" />
            <img src="./public/image/icon/facebook.svg" className="w-8 h-8" />
            <img src="./public/image/icon/square-instagram.svg" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
