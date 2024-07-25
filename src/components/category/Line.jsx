import React from "react";

const Line = () => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="w-full h-[670px] relative">
          <div className="flex justify-center items-center">
            <div className="absolute inset-0 mt-20">
              <svg
                width="100%"
                height="500"
                viewBox="0 0 1439 516"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-159.871 230.441L-127.99 201.68L-96.1171 173.381L-64.2603 146L-32.4274 119.976L-0.626019 95.7298L31.137 73.6516L62.8555 54.0986L94.5236 37.3878L126.137 23.7916L157.691 13.533L189.183 6.78274L220.611 3.6559L251.973 4.21055L283.271 8.44671L314.505 16.3063L345.676 27.6742L376.789 42.3797L407.846 60.1998L438.854 80.8622L469.816 104.05L500.74 129.405L531.633 156.538L562.502 185.029L593.354 214.437L624.199 244.307L655.043 274.178L685.896 303.586L716.764 332.077L747.657 359.209L778.581 384.565L809.544 407.753L840.551 428.415L871.608 446.235L902.721 460.94L933.893 472.308L965.126 480.168L996.424 484.404L1027.79 484.959L1059.21 481.832L1090.71 475.082L1122.26 464.823L1153.87 451.227L1185.54 434.516L1217.26 414.963L1249.02 392.885L1280.82 368.639L1312.66 342.615L1344.51 315.234L1376.39 286.935L1408.27 258.174L1440.15 229.413L1472.02 201.114L1503.88 173.733L1535.71 147.709L1567.51 123.463L1599.28 101.384L1631 81.8315L1662.66 65.1207L1694.28 51.5245L1725.83 41.2659L1757.32 34.5156L1788.75 31.3888L1820.11 31.9435L1851.41 36.1796L1882.65 44.0392L1913.82 55.4071L1944.93 70.1126L1975.99 87.9327L2006.99 108.595L2037.96 131.783L2068.88 157.138L2099.77 184.271L2130.64 212.762L2161.49 242.17L2192.34 272.04L2223.18 301.911L2254.04 331.319L2284.9 359.809L2315.8 386.942L2346.72 412.298L2377.68 435.485L2408.69 456.148L2439.75 473.968L2470.86 488.673L2502.03 500.041L2533.27 507.901L2564.56 512.137L2595.93 512.692L2627.35 509.565L2658.85 502.815L2690.4 492.556L2722.01 478.96L2753.68 462.249L2785.4 442.696L2817.16 420.618L2848.96 396.371L2880.8 370.348L2912.66 342.967L2944.53 314.668L2976.41 285.907"
                  stroke="#FFB600"
                  strokeWidth="4"
                />
                <image
                  x="410"
                  y="40"
                  width="90"
                  height="90"
                  href="/image/image1/yellow.png"
                  alt="Electronic"
                />
                <text x="410" y="160" fill="black" className="font-bold">
                  Education
                </text>
                <image
                  x="600"
                  y="200"
                  width="100"
                  height="100"
                  href="/image/image1/yellow.png"
                  alt="Electronic"
                />
                <text
                  x="568"
                  y="333"
                  fill="black"
                  className="font-bold"
                >
                  Home Service
                </text>
                <image
                  x="1100"
                  y="400"
                  width="100"
                  height="100"
                  href="/image/image1/yellow.png"
                  alt="Electronic"
                />
                <p
                  x="1110"
                  y="527"
                  fill="black"
                  className="font-bold pt-[10px] "
                >
                  Restaurant
                </p>
                <image
                  x="800"
                  y="370"
                  width="100"
                  height="100"
                  href="/image/image1/yellow.png"
                  alt="Electronic"
                />
                <text x="800" y="500" fill="black" className="font-bold">
                  Auto Service
                </text>
                <image
                  x="1300"
                  y="260"
                  width="100"
                  height="100"
                  href="/image/image1/yellow.png"
                  alt="Electronic"
                />
                <text x="1325" y="387" fill="black" className="font-bold">
                  Electronic
                </text>
              </svg>
            </div>
            <div className="absolute top-[150px] right-60 text-center">
              <h2 className="font-bold dark:text-Action text-Primary text-2xl">
                TROVKA Service
              </h2>
              <p className="w-[300px] mt-5 text-md">
                We have some services to serve you, such as Education, Home
                Services, Auto service, Restaurant, and Electronics.
              </p>
            </div>
            <div className="absolute top-60 left-44">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d163a36766c0486f7a3cabe71d416b0e70b179589a53dff68f4f6abbf8eeb20b?apiKey=8b32437f92524bbfbf6990207cb61e76&"
                className="w-full aspect-[1.04] max-w-[74px]"
                alt="Service Icon"
              />
            </div>
            <div className="absolute top-[285px] left-[149px]">
              <h1 className="mt-12 text-yellow-300 font-bold">
                Main Categories
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pb-20">
          <div className="mt-10 px-16 py-4 text-2xl font-semibold dark:text-Action text-Primary max-w-[465px]">
            OUR Category
          </div>
        </div>
      </div>
    </div>
  );
};

export default Line;
