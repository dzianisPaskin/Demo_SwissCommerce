'use server';

import Image from 'next/image';

import { Icons } from '@/assets/icons';
import flashlight from '@/assets/images/flashlight.png';

export const Card = () => {
  return (
    <div className="flex">
      <div className="px-4 py-6 w-80 mx-auto shadow-2xl shadow-stone-500/50">
        <div className="flex justify-between">
          <div className="flex">
            <Icons.leaf width="24px" height="24px" alt="leaf icon" />
            <Icons.batteryCharging
              width="24px"
              height="24px"
              alt="battery-charging icon"
            />
            <Icons.flag width="24px" height="24px" alt="flag icon" />
          </div>
          <Icons.heart
            width="24px"
            height="24px"
            alt="heart icon"
            aria-label="heart icon"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image width={240} height={240} src={flashlight} alt="Flashlight" />
        </div>
        <div className="text-left">
          <span className="flex items-center">
            <Icons.star width="17px" height="17px" alt="rating icon" />
            <span className="pl-2">(4.5)</span>
          </span>
          <span className="text-sm text-gray-500 font-medium block">
            Olight
          </span>
          <span className="text-sm font-medium block">
            S1R Baton II LED Taschenlampe - Schwarz
          </span>
          <div className="flex justify-between items-center pt-3">
            <span className="font-bold">CHF 65.25</span>
            <Icons.basket width="26px" height="26px" alt="basket icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
