import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about/Fragility_IV_large.jpg'}
          title={`Qing Chen`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              I am a ceramicist working in Buckinghamshire.
            </p>
            <br />
            <br />
            <p>
              I had been studying Fine art and Art History for a long period before I focus
              in ceramic world three years ago. I am interesting in all handcrafts, archeology
              and antique. 
            </p>
            <br />
            <br />
            <p>
              The infinite types of texture and materials from the natural world 
              attract and inspire me. A few years ago, I realised that my artistic ideal
              is closely related to the traditional Japanese philosophy (Wabi sabi),
              which finds beauty in imperfection, impermanence and simplicity.
              The beauty of simple, rustic surfaces, irregular shapes, uneven textures and
              ageing materials are fascinating to me. 
            </p>
            <br />
            <br />
            <p>
              My ceramics work with a respect for the concepts embedded in Wabi sabi. 
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about/fragility_I.jpg')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Education</h3>
            <div ref={valuesRef}>
              <dl>
                <dt>1993-1997</dt><dd>BA in Fine art at Fujian Normal University, China</dd>
                <dt>2003-2006</dt><dd>MA in Art History at Chinese National Academy of Arts, Beijing</dd>
              </dl>
              <p>
                I worked as assistant lecturer from 1997-2002 then as a lecturer of Fine art at Fujian Normal University from 2002-2008.
              </p>
              <img alt={'founder'} src={toOptimizedImage('/about/child.jpg')}></img>
            </div>
            <h3>Group Exhibitions</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
            <dl>
                <dt>1993-1997</dt><dd>BA in Fine art at Fujian Normal University, China</dd>
                <dt>2003-2006</dt><dd>MA in Art History at Chinese National Academy of Arts, Beijing</dd>
                <dt>2016</dt><dd>The Second Global Chinese Painting and Calligraphy exhibition in Tianjin Art museum, China.</dd>
                <dt>2017</dt><dd>The Society of Women Artists Annual Exhibition at The Mall Galleries , London</dd>
                <dt>2018</dt><dd>The Society of Women Artists Annual Exhibition at The Mall Galleries , London</dd>
                <dt>2018</dt><dd>Royal Society of Portrait Painters Annual Exhibition at The Mall Galleries, London</dd>
                <dt>2022</dt><dd>Bucks Pottery & Sculpture Society exhibition, Buckinghamshire, Uk</dd>
                <dt>2023</dt><dd>Buckinghamshire Arts Society Spring Open exhibition , Buckinghamshire, UK</dd>
                <dt>2024</dt><dd>Buckinghamshire Arts Society Spring / Autumn Open exhibitions , Buckinghamshire, UK</dd>
              </dl>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={toOptimizedImage('/about/memories.jpg')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
