export const ProviderInfo = () => {
  return (
    <>
      <div className="flex flex-col items-center px-20 py-16 bg-white rounded-2xl max-md:px-5 ">
        <div className=" rounded-2xl w-[700px] mt-1">
          <div className="flex justify-center items-center ">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/59586463e3e7d56119dd7b3cf30d71cec16f66d27bfd0d156f65fd28dfca043c?apiKey=8b32437f92524bbfbf6990207cb61e76&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59586463e3e7d56119dd7b3cf30d71cec16f66d27bfd0d156f65fd28dfca043c?apiKey=8b32437f92524bbfbf6990207cb61e76&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59586463e3e7d56119dd7b3cf30d71cec16f66d27bfd0d156f65fd28dfca043c?apiKey=8b32437f92524bbfbf6990207cb61e76&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59586463e3e7d56119dd7b3cf30d71cec16f66d27bfd0d156f65fd28dfca043c?apiKey=8b32437f92524bbfbf6990207cb61e76&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59586463e3e7d56119dd7b3cf30d71cec16f66d27bfd0d156f65fd28dfca043c?apiKey=8b32437f92524bbfbf6990207cb61e76&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59586463e3e7d56119dd7b3cf30d71cec16f66d27bfd0d156f65fd28dfca043c?apiKey=8b32437f92524bbfbf6990207cb61e76&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59586463e3e7d56119dd7b3cf30d71cec16f66d27bfd0d156f65fd28dfca043c?apiKey=8b32437f92524bbfbf6990207cb61e76&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59586463e3e7d56119dd7b3cf30d71cec16f66d27bfd0d156f65fd28dfca043c?apiKey=8b32437f92524bbfbf6990207cb61e76&"
              className="bg-Secondary rounded-full aspect-square h-[90px] w-[90px]"
            />
          </div>

          <div className="mt-8 text-2xl font-bold text-Primary text-center">
            General Information
          </div>

          <div className="shrink-0 mt-8 max-w-full h-px border border-solid bg-black bg-opacity-20 border-black border-opacity-20 "></div>

          <div className="mt-9 text-lg text-Primary max-md:max-w-full">
            Company Name
          </div>
          <input
            type="text"
            className="rounded-lg w-[700px]"
            placeholder="Company Name"
          />

          <div className="flex gap-5 mt-6 max-md:flex-wrap">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
              <div className="text-lg text-Primary">First Name</div>
              <input
                type="text"
                className="rounded-lg w-[320px]"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
              <div className="text-lg text-Primary">Last Name</div>
              <input
                type="text"
                className="rounded-lg w-[340px]"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="flex gap-5 mt-6 max-md:flex-wrap">
            <div className="flex flex-col flex-1 grow shrink-0 whitespace-nowrap basis-0 w-fit">
              <div className="text-lg text-Primary">Username</div>
              <input
                type="text"
                className="rounded-lg w-[320px]"
                placeholder="Username"
              />
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
              <div className="text-lg text-Primary">Phone Number</div>
              <input
                type="text"
                className="rounded-lg w-[340px]"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="flex gap-5 mt-6 max-md:flex-wrap">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
              <div className="text-lg text-Primary">Category</div>
              <input
                type="text"
                className="rounded-lg w-[320px]"
                placeholder="Choose Category"
              />
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 whitespace-nowrap basis-0 w-fit">
              <div className="text-lg text-Primary">Types</div>
              <input
                type="text"
                className="rounded-lg w-[340px]"
                placeholder="Types"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="justify-center items-center px-5 py-4 mt-14 max-w-full text-xl font-bold  text-center text-white whitespace-nowrap bg-Secondary rounded-2xl w-[250px] max-md:px-5 max-md:mt-10">
              Submit
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
