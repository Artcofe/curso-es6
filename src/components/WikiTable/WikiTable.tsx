import React, { useEffect } from 'react';

import WikiTableRow from './WikiTableRow';

import usePagination from '../../hooks/usePagination';

export default function WikiTable({ words = [] }: { words: string[] }) {
  const { onPrevious, onNext, currentPage, result, isLastPage, isFirstPage } =
    usePagination({
      source: words,
      offset: 2,
    });

  return (
    <>
      <span>{currentPage}</span>
      <button onClick={onPrevious} disabled={isFirstPage}>
        Previous
      </button>
      <button onClick={onNext} disabled={isLastPage}>
        Next
      </button>
      <tab