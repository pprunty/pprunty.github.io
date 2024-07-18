import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import PageLoader from '@/components/PageLoader';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setLoading(true);
    router.push(`/blog/page/${page}`).then(() => {
      setLoading(false);
    });
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(start + 4, totalPages);

    if (end - start < 4 && start > 1) {
      start = Math.max(1, end - 4);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <>
      <PaginationWrapper>
        {getPageNumbers().map((page) => (
          <PageNumber
            key={page}
            $active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PageNumber>
        ))}
      </PaginationWrapper>
      <PageLoader loading={loading} />
    </>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PageNumber = styled.button<{ $active: boolean }>`
  padding: 20px 20px;
  margin: 0 5px;
  background-color: ${({ $active }) => ($active ? '#000' : 'inherit')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  border: 1.5px solid #000;
  cursor: pointer;
  transition: color 0.12s, background-color 0.12s, transform 0.12s, opacity 0.12s;
  font-size: 14px;

  &:hover {
    background-color: ${({ $active }) => ($active ? '#000' : '#F0F0F0')};
  }

  &:active, &.active {
    transform: scale(0.98);
    opacity: 0.8;
    background-color: #000;
    color: #fff;
  }
`;
