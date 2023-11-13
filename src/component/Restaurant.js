import React from 'react'
import Navbar from "./navbar";
import Footer from "./footer";
import { useState } from 'react';
function Restaurant(props) {
  const restaurants = props.restaurant ;
  const itemsPerPage = 100;
  const pageRangeDisplayed = 5; // Number of page numbers to display at a time

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = restaurants.slice(indexOfFirstItem, indexOfLastItem);

  const totalPageCount = Math.ceil(restaurants.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const minPage = Math.max(1, currentPage - Math.floor(pageRangeDisplayed / 2));
    const maxPage = Math.min(totalPageCount, minPage + pageRangeDisplayed - 1);

    for (let i = minPage; i <= maxPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };
// console.log(restaurants);
  return (
    <div>
    <Navbar />
    <h2 className="mt-20 text-center text-3xl">Restaurants</h2>
    <div className="flex flex-wrap justify-center">
      {currentItems.map((restro, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4">
          <div className="px-6 py-4">
            <h1 className="font-bold text-xl mb-2">{restro.name}</h1>
            <p className="text-gray-700 font-bold">
              Address: {restro.address}, {restro["address line 2"]}, {restro.outcode} {restro.postcode}
            </p>
            <p className="text-gray-700 font-bold">Rating :{restro.rating}</p>
          </div>
          <div className="px-6 py-4 bg-slate-400">
          <p className="text-gray-700 font-bold">{restro.type_of_food}</p>
            <a
              href={restro.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Menu
            </a>
          </div>
        </div>
      ))}
    </div>
    
    <nav className="text-center  flex justify-center" aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <button
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              onClick={handlePrevPage}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
              </svg>
            </button>
          </li>
          {getPageNumbers().map((page) => (
            <li key={page}>
              <button
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  currentPage === page
                    ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              onClick={handleNextPage}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    <Footer />
  </div>
  )
}

export default Restaurant


