import Header from "../Header";
import Head from "next/head";
import MobileNavigation from "../Navigation/MobileNavigation";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>VenusLab</title>

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MobileNavigation />
      {children}
    </>
  );
}
