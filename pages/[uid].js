import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";

const UidPage = () => {
  const link = encodeURIComponent("//[]()?");
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>[UID] Page</h1>
        <ul>
          <li>Query: {query.uid}</li>
          <li><a href={`/${link}`}>Link to url</a></li>
          <li><a href={`/?uid=${link}`}>Link to redirect</a></li>
        </ul>
      </main>
    </div>
  )
}
export default UidPage;