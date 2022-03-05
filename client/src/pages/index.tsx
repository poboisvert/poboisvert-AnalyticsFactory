import React from 'react';

import Layout from '@/components/layout/Layout';
import { signIn, useSession } from 'next-auth/react';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import WelcomeBanner from '@/components/partials/dashboard/WelcomeBanner';
import CTA from '@/components/CTA';

import DashboardAvatars from '@/components/partials/dashboard/DashboardAvatars';
import DashboardCard01 from '@/components/partials/dashboard/DashboardCard01';
import DashboardCard02 from '@/components/partials/dashboard/DashboardCard02';

type ISession = {
  data?: any;
};

function Dashboard() {
  const { data: session }: ISession = useSession();

  const signInHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn();
  };

  return (
    <Layout>
      <div className='flex h-screen overflow-hidden'>
        {/* Sidebar */}

        <Sidebar />

        {/* Content area */}
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          {/*  Site header */}
          <Header />

          <main>
            <div className='max-w-9xl mx-auto w-full px-4 py-6 sm:px-6 lg:px-8'>
              {/* Welcome banner */}

              {session ? (
                <WelcomeBanner title={session.user.name} />
              ) : (
                <WelcomeBanner title='' />
              )}
              <CTA text='This is an test alert' />
              {/* Dashboard actions */}
              <div className='mb-8 sm:flex sm:items-center sm:justify-between'>
                {/* Left: Avatars */}
                <DashboardAvatars />
              </div>

              <div className='grid grid-cols-4 gap-6 py-2'>
                <a
                  href='#'
                  className='flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row'
                >
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      Experimentation
                    </h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                      DB: ['sales_daily', 'recall_sales_daily',
                      'confirm_renew_daily']
                    </p>
                  </div>
                </a>

                <a
                  href='#'
                  className='flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row'
                >
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      Runs
                    </h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                      The next analytics run is planeed on 2022-03-10 at 2AM EDT
                    </p>
                  </div>
                </a>

                <a
                  href='#'
                  className='flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row'
                >
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      Pull Requests
                    </h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                      3 Pull Requets from the repository "value"
                    </p>
                  </div>
                </a>

                <a
                  href='#'
                  className='flex flex-col items-center rounded-lg border bg-white shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row'
                >
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      Pending Deploying
                    </h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                      3 XGBoosting.
                    </p>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                      2 ARMIA Model.
                    </p>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                      1 PyCaret.
                    </p>
                  </div>
                </a>
              </div>

              {/* Cards */}
              <div className='grid grid-cols-8 gap-6'>
                <DashboardCard01 />
                <DashboardCard02 />
              </div>

              <div className='grid grid-cols-2 gap-6 py-8'>
                <DashboardCard01 />
                <DashboardCard02 />
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
