// components/Pagination.tsx

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='pagination' >
      <button
      className='arrow-pagination prev'
        onClick={() => onPageChange(currentPage - 1)} // Retroceder una página
        disabled={currentPage === 1} // Deshabilitar si ya estamos en la primera página
      >
        Anterior
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
        className='paginate-number'
          key={index}
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
      <button
      className='arrow-pagination next'
        onClick={() => onPageChange(currentPage + 1)} // Avanzar una página
        disabled={currentPage === totalPages} // Deshabilitar si ya estamos en la última página
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;