'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface SearchResultsPaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  resultsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function SearchResultsPagination({
  currentPage,
  totalPages,
  totalResults,
  resultsPerPage,
  onPageChange
}: SearchResultsPaginationProps) {
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  const generatePageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);

      if (currentPage > 4) {
        pages.push('ellipsis-start');
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 3) {
        pages.push('ellipsis-end');
      }

      // Show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  if (totalPages <= 1) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="body-secondary text-sm">
          Showing {startResult}-{endResult} of {totalResults.toLocaleString()} results
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
      {/* Results Info */}
      <p className="body-secondary text-sm">
        Showing {startResult.toLocaleString()}-{endResult.toLocaleString()} of{' '}
        {totalResults.toLocaleString()} results
      </p>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious
              onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
              isActive={currentPage > 1}
              className={`focus:ring-2 focus:ring-focus-ring ${
                currentPage <= 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'
              }`}
              aria-label="Go to previous page"
            />
          </PaginationItem>

          {/* Page Numbers */}
          {pageNumbers.map((page, index) => (
            <PaginationItem key={index}>
              {typeof page === 'number' ? (
                <PaginationLink
                  onClick={() => onPageChange(page)}
                  isActive={currentPage === page}
                  className="cursor-pointer focus:ring-2 focus:ring-focus-ring"
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </PaginationLink>
              ) : (
                <PaginationEllipsis />
              )}
            </PaginationItem>
          ))}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext
              onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
              isActive={currentPage < totalPages}
              className={`focus:ring-2 focus:ring-focus-ring ${
                currentPage >= totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'
              }`}
              aria-label="Go to next page"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}