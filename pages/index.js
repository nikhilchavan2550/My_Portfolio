import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import dynamic from 'next/dynamic';
const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikhil Chavan | Portfolio</title>
        <meta name="description" content="Portfolio website of Nikhil Chavan - Software Developer, Machine Learning Enthusiast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}