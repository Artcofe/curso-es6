import { useEffect, useState } from 'react';

const usePagination = ({ source = [], initialPage = 1, offset = 10 }) => {
  const getResult = () => {
    const startIdx = (currentPage - 1) * offset;
    const endIdx = startIdx + offset;
    return source.slice(startI