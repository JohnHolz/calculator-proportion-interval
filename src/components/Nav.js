import React from 'react';

const Nav = () => {
    return (
        <div>
            <nav className="relative select-none bg-gray-800 lg:flex lg:items-stretch w-full">
              <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
                <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                  <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Interval Calculator</a>
                  <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Significance calculator</a>
                  <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Uplift/Deadline Calculator</a>
                </div>
              </div>
            </nav>
        </div>
    );
}

export default Nav;
