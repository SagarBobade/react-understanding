import { useState } from "react";

const PaginationExample: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const totalPages = 5;
  
    const goToNextPage = () => {
      if (page < totalPages) setPage(page + 1);
    };
  
    const goToPreviousPage = () => {
      if (page > 1) setPage(page - 1);
    };
  
    return (
      <div>
        <button onClick={goToPreviousPage} disabled={page === 1}>Previous</button>
        <span>{page} / {totalPages}</span>
        <button onClick={goToNextPage} disabled={page === totalPages}>Next</button>
      </div>
    );
  };

  export default PaginationExample;