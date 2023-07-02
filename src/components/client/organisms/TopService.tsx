'use client';

import Image from 'next/image';
import Link from 'next/link';
import { irukaraLogo } from '@/common/config/site.config';
import { useEffect, useState } from 'react';
import liff from '@line/liff';
import InButton from '../atoms/InButton';

export default function TopService({ isWeb }: { isWeb: string }) {
  const [buttonText, setButtonText] = useState<string>('');

  useEffect(() => {
    if (parseInt(isWeb, 10) === 0) {
      setButtonText('LINEでログイン');
    }
  }, []);

  function lineLogin() {
    liff.login();
  }

  return (
    <div className='flex flex-col py-12'>
      <div className='flex justify-center font-bold text-3xl py-4'>
        <h1>Welcome to Irukara!</h1>
      </div>
      <div className='flex justify-center py-6'>
        <Image
          src={irukaraLogo.src}
          alt={irukaraLogo.alt}
          width={130}
          height={130}
        />
      </div>

      <div>
        {buttonText ? (
          <button onClick={lineLogin}>
            <InButton text={buttonText} />
          </button>
        ) : (
          <Link href='/mypage'>
            <InButton text='マイページへ' />
          </Link>
        )}
      </div>
    </div>
  );
}
