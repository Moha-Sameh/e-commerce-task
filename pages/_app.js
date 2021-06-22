import "../styles/globals.scss";
import { CartProvider } from "react-use-cart";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Layout>
  );
}

export default MyApp;
