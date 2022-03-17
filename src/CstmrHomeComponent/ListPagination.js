import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

//this component style form index.scss

const ListPagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers[pageNumbers.length - 1]) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="listpagination">
      <ul>
        <li
          className={`prevBtn ${currentPage === 1 ? 'de-active' : ''}`}
          onClick={handlePrev}
        >
          <i>
            <RiArrowLeftSLine />
          </i>
        </li>
        {pageNumbers.map((item, ind) => (
          <li
            key={item}
            className={` pagination-item ${
              item === currentPage ||
              item === currentPage + 1 ||
              item === currentPage - 1
                ? 'block'
                : ''
            } ${currentPage === 1 && item < 4 ? 'block' : ''} 
          ${
            currentPage === pageNumbers[pageNumbers.length - 1] &&
            item > currentPage - 3
              ? 'block'
              : ''
          }`}
          >
            <h6
              className={`paginate-div ${
                item === currentPage ? 'active-pg' : ''
              }`}
              onClick={() => paginate(item)}
            >
              {item}
            </h6>
          </li>
        ))}
        <li
          className={` nextBtn ${
            currentPage === pageNumbers[pageNumbers.length - 1]
              ? 'de-active'
              : ''
          }`}
          onClick={handleNext}
        >
          <i>
            <RiArrowRightSLine />
          </i>
        </li>
      </ul>
    </div>
  );
};

export default ListPagination;

//(currentPage === pageNumbers[pageNumbers.length - 1] ? 4 : 2)
