import React from 'react';
import FadeUp from './FadeUp';
import Image from 'next/image';
import clsx from 'clsx';
import { urlFor } from '../lib/sanity';

function SpareTimeCard({ spare }: any) {
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      {spare &&
        spare?.map((item: any) => {
          return (
            <div
              className="block relative group bg-teal-500 cursor-pointer select-none overflow-hidden "
              key={item._id}
            >
              <img
                className={
                  'object-cover group-hover:scale-125 group-hover:opacity-60  transition duration-500 ease-in-out '
                }
                src={urlFor(item.image).url()}
                alt={item._id}
              />
              <p className="text-4xl md:text-3xl w-full text-white opacity-0 group-hover:opacity-100 font-lg transition duration-500 ease-in-out text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {item.description}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default SpareTimeCard;
