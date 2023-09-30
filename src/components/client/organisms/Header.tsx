'use client';

import Link from 'next/link';
import { siteConfig } from '@/common/config/site.config';
import Image from 'next/image';
import { allDeleteCookies } from '@/common/utils/authLINE/manageCookies';

import { useState } from 'react';
import { signOut, signIn } from 'next-auth/react';
import { KanitFont } from '../atoms';
import LoginModal from '../molecules/LoginModal';
import HamburgerMenu from '../molecules/HamburgerMenu';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function clickSignOut() {
    signOut();
    allDeleteCookies();
    window.location.href = '/';
  }

  return (
    <header className='shadow-md w-full fixed top-0 left-0'>
      <div className='bg-nav text-white p-4 flex items-center justify-between'>
        <nav>
          <a href={siteConfig.topHref} className='flex items-center'>
            <Image
              src={siteConfig.headerLogo}
              alt={siteConfig.logoAlt}
              width={50}
              height={50}
            />
            <KanitFont fontStyle='text-white text-3xl ml-4' text='Irukara' />
          </a>
        </nav>
        {/* ログインボタン モーダル */}
        <div className='flex items-center'>
          <LoginModal />
          <HamburgerMenu />
          <div>
            <nav className={`${isOpen ? 'block' : 'hidden'}`}>
              <ul
                className={`flex flex-col items-center pr-8 pb-12 pl-9 z-[-1] absolute left-0 w-full transition-all bg-nav duration-500 ease-in ${
                  isOpen ? 'top-20' : 'top-[-490px]'
                }`}
              >
                {/* 未ログイン時のハンバーガーメニュー */}
                {siteConfig.headerList.map((list) => (
                  <li key={list.title} className='font-semibold text-xl my-4'>
                    <Link href={list.href} onClick={() => setIsOpen(!isOpen)}>
                      {list.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <button>ログイン</button>
                </li>
                {/* ログイン時のハンバーガーメニューをここに書きたい */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <button onClick={() => signIn('line')}>LINEログイン</button>
      <button onClick={() => signIn('google')}>googleログイン</button>
      <button onClick={clickSignOut}>テストサインアウト</button>
    </header>
  );
}
