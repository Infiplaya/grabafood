import { Layout } from "@/components/ui/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Grab a Food</title>
        <meta
          name="description"
          content="Website where you can find the food you want"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="pb-64 pt-32 lg:px-36">
          <h1 className="text-7xl">Contact me</h1>
          <ul className="mt-10 text-4xl">
            <li>
              <Link href={`mailto:pawelsobaniec6@gmail.com`}>Email</Link>
            </li>
            <li>
              <Link href={`https://github.com/Infiplaya`}>Github</Link>
            </li>
            <li>
              <Link href={`https://www.linkedin.com/in/psobaniec09/`}>
                Linkedin
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
