import { useState } from 'react';
import { WikiWord } from '../types';
import KOREAN_CONSONANTS from '../../static/korean-consonants';

const UNICODE_FIRST_FOREAN = 44032;
const NUMBER_OF_KOREAN_LETTERS = 11172;
const NUMBER_OF_KOREAN_NUCLEUS = 21;
const NUMBER_OF_KOREAN_CODA = 28;

const ALPHABET_REGEX = new RegExp(/^[A-Za-z]$/);
const KOREAN_CONSONANTS_REGEX = new RegExp(/^[ㄱ-ㅎ]$/);

const isLetterFilterValue = (value: string): boolean => {
  return ALPHABET_REGEX.test(value) || KOREAN_CONSONANTS_REGEX.test(value);
};
const getLetterLanguage = (value: string): 'KOREAN' | 'ENGLISH' | null => {
  if (KOREAN_CONSONANTS_REGEX.test(value)) {
    return 'KOREAN';
  } else if (ALPHABET_REGEX.test(value)) {
    return 'ENGLISH';
  }
  return null;
};

const useSearch = (source: WikiWord[]) => {
  const [result, setResult] = useState(source);
  const onSearch = (keyword: string) => {
    keyword = keyword.trim();
    if (isLetterFilterValue(keyword)) {
      onFilter({ value: keyword, language: get