import Layout from '../components/Layout';
import '../styles/globals.css';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:1337/graphql',
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
