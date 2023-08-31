interface PaginatedData<T> {
    data: T[];
    totalPages: number;
  }
  
  export const paginate = <T>(items: T[], itemsPerPage: number, currentPage: number): PaginatedData<T> => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = items.slice(firstIndex, lastIndex);
  
    const totalPages = Math.ceil(items.length / itemsPerPage);
  
    return {
      data: currentItems,
      totalPages: totalPages,
    };
  };