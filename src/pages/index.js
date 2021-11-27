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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>웹 분석이 궁금하다면</div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/handbook/intro"
            onClick={() => {
              gtag('event', '핸드북 읽기 클릭', {
                event_category: '메인페이지',
                event_label: '라벨',
              });
            }}