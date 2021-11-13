import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from 'components/HomepageFeatures';
import Footer from 'theme/Footer';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <hea