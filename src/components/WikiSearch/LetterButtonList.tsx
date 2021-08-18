import React from 'react';
import styled from '@emotion/styled';

export default function LetterButtonList({
  letters,
  onClick,
}: {
  letters: string[];
  onClick: (value: string) => void;
}) {
  return (
    <Ul>
      {letters.map(letter => (
        <Li key={letter}>
          <Button
            onClick={() => {
              onClick(letter);
            }}
          >
            {letter}
          </Button>
        </Li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  padding: 0;
  margin-bottom: 7px;
`;

const Li = styled.li`
  display: inline-block;
  list-style: none;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-ite