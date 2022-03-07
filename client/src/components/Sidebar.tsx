import React from 'react';
import Link from 'next/link';
import Icon from '@/components/icon';

function Sidebar() {
  return (
    <div>
      <div
        id='sidebar'
        className={`no-scrollbar lg:sidebar-expanded:!w-64 absolute left-0 top-0 z-40 flex h-screen w-24 shrink-0 transform flex-col overflow-y-scroll bg-slate-800 p-4 text-gray-400 transition-all duration-200 ease-in-out lg:static lg:left-auto lg:top-auto lg:w-20 lg:translate-x-0 lg:overflow-y-auto 2xl:!w-32`}
      >
        {/* Sidebar header */}
        <div className='mb-4 flex w-full flex-col items-center text-center'>
          {/* Logo */}
          Factory Block
        </div>

        {/* Links */}
        <div className='space-y-8'>
          {/* Pages group */}
          <div className='flex flex-col items-center'>
            <ul className='mt-3'>
              {/* Dashboard */}
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 hover:rounded-md hover:bg-gray-700`}
              >
                <div className='flex flex-col items-center'>
                  <Icon name='TableRows' />
                  <span className='ml-3 text-sm font-medium text-zinc-500 '>
                    Runs
                  </span>
                </div>
              </li>
              {/* Analytics */}
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 hover:rounded-md hover:bg-gray-700`}
              >
                <div className='flex flex-col items-center'>
                  <Icon name='AccountTree' />
                  <span className='ml-3 text-sm font-medium text-zinc-500 '>
                    Metrics
                  </span>
                </div>
              </li>
              {/* Analytics */}
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 hover:rounded-md hover:bg-gray-700`}
              >
                <div className='flex flex-col items-center'>
                  <Icon name='DataObject' />
                  <span className='ml-3 text-sm font-medium text-zinc-500'>
                    Params
                  </span>
                </div>
              </li>
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 hover:rounded-md hover:bg-gray-700`}
              >
                <div className='flex flex-col items-center'>
                  <Icon name='Public' />
                  <span className='ml-3 text-sm font-medium text-zinc-500'>
                    Websites
                  </span>
                </div>
              </li>
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 hover:rounded-md hover:bg-gray-700`}
              >
                <div className='flex flex-col items-center'>
                  <Icon name='AutoGraph' />
                  <span className='ml-3 text-sm font-medium text-zinc-500'>
                    Scatter
                  </span>
                </div>
              </li>
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 hover:rounded-md hover:bg-gray-700`}
              >
                <div className='flex flex-col items-center'>
                  <Icon name='InsertChart' />
                  <span className='ml-3 text-sm font-medium text-zinc-500'>
                    Analytics
                  </span>
                </div>
              </li>
              <li
                className={`mb-0.5 rounded-sm px-3 py-2 last:mb-0 hover:rounded-md hover:bg-gray-700`}
              >
                <div className='flex flex-col items-center'>
                  <Icon name='EmojiFlags' />
                  <span className='ml-3 text-sm font-medium text-zinc-500'>
                    Tags
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
