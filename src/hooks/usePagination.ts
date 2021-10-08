import { useEffect, useState } from 'react';

const usePagination = ({ source = [], initialPage = 1, offset = 10 }) => {
  const getResult = () => {
    const startIdx = (currentPage - 1) * offset;
    const endIdx = startIdx + offset;
    return source.slice(startIdx, endIdx);
  };

  const getMaxPage = () => {
    return Math.max(Math.ceil(source.length / offset), 1);
  };

  const minPage = 1;
  const [currentPage, setCurrentPage] = useS