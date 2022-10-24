import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Grab A Food</title>
        <meta name="description" content="Food recipes for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <main className="container mx-auto min-h-screen">
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
