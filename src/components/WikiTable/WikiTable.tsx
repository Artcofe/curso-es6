import React, { useEffect } from 'react';

import WikiTableRow from './WikiTableRow';

import usePagination from '../../hooks/usePagination';

export default function WikiTable({ words = [] }: { words: string[] }) {
  const { 