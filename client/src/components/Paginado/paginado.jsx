import React from "react";
import "./paginado.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

/*
const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
*/

export default Pagination;
