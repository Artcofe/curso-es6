import React, { useMemo } from 'react';
import RabbitHappy from '@site/static/img/characters/rabbit/rabbit-happy.png';
import RaccoonDizzy from '@site/static/img/characters/raccoon/raccoon-dizzy.png';
import styled from '@emotion/styled';

type Avatar = 'rabbit-happy' | 'raccoon-dizzy';

const ChatBox = ({
  avatar,
  children,
}: {
  avatar: Avatar;
  children: React.ReactNode;
}) => {
  const imgSrc = useMemo(() => {
    switch (avatar) {
      case 'rabbit-happy':
        return RabbitHappy;
      case 'raccoon-dizzy':
        return Raccoon