import React from 'react';
import Icon from '@/components/icon';
import { signIn, signOut, useSession } from 'next-auth/react';

function Header() {
  const { data: session } = useSession();

  return (
    <header className='sticky top-0 z-30 border-b border-slate-200 bg-white'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='-mb-px flex h-16 items-center justify-between'>
          {/* Header: Left side */}
          <div className='flex'>
            {/* Hamburger button */}
            <button
              className='text-slate-500 hover:text-slate-600 lg:hidden'
              aria-controls='sidebar'
            >
              <span className='sr-only'>Open sidebar</span>
              <svg
                className='h-6 w-6 fill-current'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect x='4' y='5' width='16' height='2' />
                <rect x='4' y='11' width='16' height='2' />
                <rect x='4' y='17' width='16' height='2' />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className='flex items-center'>
            <Icon name='Home' />
            <button
              className='focus:shadow-outline-blue relative rounded-md align-middle transition delay-150 ease-in-out focus:outline-none'
              aria-label='Notifications'
              aria-haspopup='true'
            >
              <Icon name='AccountBox' />

              {/* <!-- Notification badge --> */}
              <span className='absolute top-0 right-0 inline-block h-3 w-3'>
                <span className='absolute h-full w-full animate-ping rounded-full bg-indigo-500'></span>
                <span className='absolute h-3 w-3 rounded-full bg-indigo-500'></span>
              </span>
            </button>
            {session ? (
              <>
                <button
                  className='focus:shadow-outline-blue rounded-full focus:outline-none'
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                  aria-label='Account'
                  aria-haspopup='true'
                >
                  <Icon name='Logout' />
                </button>
              </>
            ) : (
              <button
                className='focus:shadow-outline-blue rounded-full focus:outline-none'
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
                aria-label='Account'
                aria-haspopup='true'
              >
                <Icon name='ArrowForwardIos' />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
