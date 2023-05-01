import React from 'react';
import { getSpare } from '../lib/fetchers';
import { urlFor } from '../lib/sanity';
import Image from 'next/image';
import clsx from 'clsx';
import FadeUp from './FadeUp';
import SpareTimeCard from './SpareTimeCard';

const SpareTime = async () => {
  const spare = await getSpare();
  
  return (
    <section className="relative mt-20 space-x-0 mx-auto flex max-w-2xl justify-between md:mt-28 md:space-x-12 md:max-w-none md:items-center">
      <div>
        <FadeUp>
          <h2 className="h2">In My Spare Time</h2>
        </FadeUp>
        <FadeUp>
          <SpareTimeCard spare={spare} />
        </FadeUp>
      </div>
    </section>
  );
};

export default SpareTime as unknown as () => JSX.Element;
