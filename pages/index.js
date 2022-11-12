import Link from 'next/link';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';
import Date from '../components/date';

import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className="container">
        <Head>
          <title>Alex Moț</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </Layout>
  );
}
