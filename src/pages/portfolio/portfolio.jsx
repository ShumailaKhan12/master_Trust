import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const Portfolio = () => {
  const stocks = [
    {
      name: "Eternal Ltd",
      price: "326.00",
      returns: "417.88%",
      logo: "https://dummyimage.com/40x40/f00/fff.png&text=E", // replace with real logo
    },
    {
      name: "Bharat Electronics Ltd",
      price: "411.65",
      returns: "262.97%",
      logo: "https://dummyimage.com/40x40/0af/fff.png&text=B",
    },
    {
      name: "Trent Ltd",
      price: "5225.00",
      returns: "259.29%",
      logo: "https://dummyimage.com/40x40/00f/fff.png&text=T",
    },
    {
      name: "Mahindra & Mahindra Ltd",
      price: "3630.00",
      returns: "188.62%",
      logo: "https://dummyimage.com/40x40/f00/fff.png&text=M",
    },
  ];

  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex bg-gray-100">
            <Sidebar />
          <div className="mt-18 space-y-6 w-full">
            <div className="bg-white py-10 rounded-lg ms-5">
              {/* Header Section */}
              <div className="flex items-center justify-around w-full gap-2 max-w-5xl mb-10">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Ready. Set. Invest.
                  </h2>
                  <p className="text-gray-500">
                    Begin your investment <br /> journey today.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-teal-50">
                    <span className="absolute top-2 right-2 text-sm font-semibold text-teal-600">
                      +20%
                    </span>
                    <svg
                      viewBox="0 0 200 100"
                      className="w-14 h-14 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <path d="M10 80 C 40 20, 60 90, 100 40 S 160 80, 190 20" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Top Picks Section */}
              <div className="w-full max-w-7xl px-2">
                <p className="text-gray-400 font-medium text-xl mb-4">
                  Start with our <span className="font-semibold text-gray-700">top picks</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {stocks.map((stock, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-6 border border-slate-300 rounded-lg bg-white"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={stock.logo}
                          alt={stock.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="text-gray-800 font-medium">{stock.name}</p>
                          <p className="text-gray-500 text-sm">{stock.price}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-xs">3Y Returns</p>
                        <p className="text-green-500 font-semibold">{stock.returns}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
