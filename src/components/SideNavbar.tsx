import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SideNavbar = () => {
  const [isCollapsed, setIsCollapsed ] = useState(false);
  const [showList, setShowList] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('');

console.log('hello from navbar')
  useEffect(() => {
    if (!isCollapsed) {
      const timer = setTimeout(() => {
        setShowList(true);

        return () => clearTimeout(timer);
      }, 300);
    } else {
      setShowList(false);
    }
  }, [isCollapsed]);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  return (
  <div
  className={`bg-primary relative top-0 left-0 h-full transition-all duration-1000 ease-in-out ${
    isCollapsed ? 'w-16 flex justify-center' : 'w-[200px]'
  }`}
>
      {isCollapsed ? (
        <div
          className={`absolute top-5 right-11 transition-all duration-1000 ease-in-out ${
            isCollapsed ? 'translate-x-full' : ''
          }`}
        >
          
          <button className=" h-full flex text-center items-center" onClick={() => setIsCollapsed(!isCollapsed)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-4 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      ) : (
        <>
          <div
            className="rotate-360 absolute top-0 right-0 mt-4 mr-4
            transition-all
            duration-1000 ease-in-out"
          >
            <button
              className="text-l text-slate-400"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {' '}
              X
            </button>
          </div>
          <div
            className={`flex flex-col p-6 text-lg transition-opacity duration-300 ${
              showList ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ul className="flex flex-col pt-6 ">
              <Link
                className={`pt-2 text-slate-400 hover:text-slate-500 ${
                  currentRoute === '/' ? 'font-bold' : ''
                }`}
                to="/"
              >
                EV Map
              </Link>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
