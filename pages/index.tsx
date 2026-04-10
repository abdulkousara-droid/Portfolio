import Head from "next/head";
import { Inter } from "next/font/google";
import { Home } from "../components/Home/Home";


const inter = Inter({ subsets: ["latin"] });

export default function home() {
  return (
    <>
      <Head>
        <title>Kader Kousara | Software Developer</title>
        <link rel="shortcut icon" href="/next.svg" />

      </Head>
      <Home />
    </>
  );
} 
