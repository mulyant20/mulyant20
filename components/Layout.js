import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>mulyana</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
