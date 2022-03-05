import React from 'react';
import Image from 'next/image';
import { GetServerSideProps } from 'next';

import { getProviders, getSession, signIn } from 'next-auth/react';

function LoginPage({ providers }: any): any {
  const imgSource = '/images/login-office-dark.png';

  return (
    <div className='flex min-h-screen items-center bg-gray-50 p-6 dark:bg-gray-900'>
      <div className='mx-auto h-full max-w-4xl flex-1 overflow-hidden rounded-lg shadow-xl dark:bg-gray-800'>
        <div className='flex flex-col overflow-y-auto md:flex-row'>
          <div className='relative h-32 md:h-auto md:w-1/2'>
            <Image
              aria-hidden='true'
              className='hidden h-full w-full object-cover'
              src={imgSource}
              alt='Office'
              layout='fill'
            />
          </div>
          <main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <div className='m-2 w-full max-w-xs'>
              <div className='m-2'>
                {Object.keys(providers).map((key, i) => (
                  <button
                    className='focus:shadow-outline block w-full appearance-none rounded-lg border border-gray-700 bg-gray-900 py-2 px-4 leading-normal text-gray-300 hover:bg-gray-800  focus:outline-none'
                    onClick={() => signIn(key)}
                  >
                    {key.toUpperCase()}
                  </button>
                ))}
              </div>

              <form>
                <div className='m-2'>
                  <label
                    className='mb-2 block text-sm font-bold text-gray-300'
                    htmlFor='username'
                  >
                    Username
                  </label>
                  <input
                    className='focus:shadow-outline block w-full appearance-none rounded-lg border border-gray-700 bg-gray-900 py-2 px-4 leading-normal focus:outline-none'
                    type='email'
                    id='username'
                    placeholder='jane@example.com'
                  />
                </div>
                <div className='m-2'>
                  <label
                    className='mb-2 block text-sm font-bold text-gray-300'
                    htmlFor='password'
                  >
                    Password
                  </label>
                  <input
                    className='focus:shadow-outline block w-full appearance-none rounded-lg border border-gray-700 bg-gray-900 py-2 px-4 leading-normal focus:outline-none'
                    id='password'
                    type='password'
                  />
                </div>
                <div className='m-2'>
                  <button
                    type='submit'
                    className='focus:shadow-outline block w-full appearance-none rounded-lg border border-gray-700 bg-indigo-900 py-2 px-4 leading-normal text-zinc-500 hover:bg-indigo-800 focus:outline-none'
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: '/' },
      props: {},
    };
  }

  return {
    props: { providers },
  };
};
