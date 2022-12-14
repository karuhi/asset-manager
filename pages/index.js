import Head from "next/head";
import styles from "../styles/Home.module.css";

import client from "../libs/apollo";
import Card from "../components/Card";
import GET_TOURNAMENTS_WITH_STANDINGS from "../queries/getTournamentsWithStandings";

export default function Home({ loading, data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="text-center m-5">Start.gg With Apollo GraphQL</h1>
      </header>
      <div className="row row-cols-auto justify-content-md-center">
        {!loading &&
          data.map((item, idx) => (
            <div key={idx} className="col g-4">
              <Card event={item} key={idx} />
            </div>
          ))}
      </div>
    </div>
  );
}

export const allPostsQueryVars = {
  slug: "evo2018",
  page: 1,
  perPage: 5,
};

export async function getServerSideProps() {
  console.log("Starting Query...");

  let results;
  try {
    results = await client.query({
      query: GET_TOURNAMENTS_WITH_STANDINGS,
      variables: allPostsQueryVars,
    });
    console.log(results);
  } catch (err) {
    console.log(err);
  }

  return {
    props: { loading: results.loading, data: results.data.tournament.events },
  };
}
