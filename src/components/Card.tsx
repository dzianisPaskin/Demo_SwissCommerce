'use server';

import Image from 'next/image';

import flashlight from '@/assets/images/flashlight.png';

import { Icon } from './Icon';

export const Card = () => {
  return (
    <div className="flex">
      <div className="px-4 py-6 w-80 mx-auto shadow-2xl shadow-stone-500/50">
        <div className="flex justify-between">
          <div className="flex">
            <Icon name="leaf" className="w-8 h-6 fill-[#228b22]" />
            <Icon name="battery-charging" className="w-6 h-6" />
            <Icon name="flag" className="w-6 h-6" />
          </div>
          <Icon name="heart" className="w-6 h-6" />
        </div>
        <div className="flex items-center justify-center">
          <Image
            priority
            width={240}
            height={240}
            src={flashlight}
            alt="Flashlight"
          />
        </div>
        <div className="text-left">
          <span className="flex items-center">
            <Icon name="star" className="w-5 h-5" />

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
            <button aria-label="basket button">
              <Icon name="basket" className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
