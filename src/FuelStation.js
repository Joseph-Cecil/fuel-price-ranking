import React from "react";
import Data from './data.json'

export const FuelStation = () => {

  //usestate
  
  // Sort the data array based on the diesel fuel price
  const sortedData = Data.sort((a, b) => a.fuel_prices[0].diesel - b.fuel_prices[0].diesel);

  return (
    <div className="grid grid-cols-1 gap-8">
      {sortedData.map((data) => {
        return (
          <article className="bg-white rounded-lg shadow p-8 mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl xl:mx-auto text-center md:text-left">
            <div className="lg:border-r lg:border-slate-400">
              <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                Fuel Station
              </h2>
              <p className="font-bold text-slate-900 text-lg md:text-xl xl:text-2xl">
                {data.name} 
              </p>
            </div>
            {data.fuel_prices.map((prices) => {
              return (
                <>
                  <div className="lg:border-r lg:border-slate-400">
                    <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                      Diesel Price
                    </h2>
                    <p className="font-bold text-slate-900 text-lg md:text-xl xl:text-2xl">
                      {prices.diesel}
                    </p>
                  </div>

                  <div className="lg:border-r lg:border-slate-400">
                    <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                      Super Price
                    </h2>
                    <p className="font-bold text-slate-900 text-lg md:text-xl xl:text-2xl">
                      {prices.super}
                    </p>
                  </div>

                  <div>
                    <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                      Kerosine
                    </h2>
                    <p className="font-bold text-slate-900 text-lg md:text-xl xl:text-2xl">
                      {prices.Kerosine}
                    </p>
                  </div>
                </>
              );
            })}
            <a href={`/directions`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Show Me
            </a>
          </article>
        );
      })}
    </div>
  );
};
