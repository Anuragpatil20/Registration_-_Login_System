import React from 'react';

function Navbar() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="text-white body-font bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            
            
          </nav>
          <a href='/login' className="inline-flex  items-center border-2 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded-l-lg rounded-tr-lg text-white mt-4 md:mt-0">
            Login
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </header>

      <main className="flex-grow">
        <section className="h-full text-gray-600 body-font bg-gradient-to-r from-gray-100 via-orange-200 to-orange-300 hover:from-orange-300 hover:via-orange-200 hover:to-gray-100">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
               
              </p>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 pt-12">
                <mark className="text-white animate-pulse bg-orange-600 border-0 py-1 px-8 focus:outline-none hover:bg-orange-500 rounded-tr-3xl rounded-bl-3xl text-2xl">
                create a new account
                </mark>
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base pt-6 text-gray-800">
               
              </p>
            </div>
            <button className="flex mx-auto animate-bounce text-white items-center bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded-l-lg rounded-tr-lg shadow-2xl text-lg">
              <a href="/register">Register</a>
            </button>
          </div>
        </section>
      </main>

    </div>
  );
}

export default Navbar;
