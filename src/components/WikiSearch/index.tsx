
import React from 'react';
import styled from '@emotion/styled';
import LetterFilter from './LetterFilter';
import SearchInput from './SearchInput';

export default function WikiSearch({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <SearchWrapper>
      <LetterFilter value={value} onLetterClick={onValueChange} />
      <SearchInput value={value} onValueChange={onValueChange} />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem;
  padding: 1.5rem 1rem;
  border-radius: 8px;
  background-color: #fafafa;
`;