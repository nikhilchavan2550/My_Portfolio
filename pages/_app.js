import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;