// Task 1
// export default function Home(){
//     return <h1>Hello! Static Side Generation...</h1>
// }

// Task 2
// import { getPostData } from "../lib/posts";

// export default function Home({ data, content }) {
//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.date}</p>
//       <p><b><i>{data.author}</i></b></p>
//       <div dangerouslySetInnerHTML={{ __html: content }} />
//     </div>
//   );
// }

// // Fetch the post data at build time
// export async function getStaticProps() {
//   const { data, content } = getPostData();
//   return {
//     props: { data, content },
//   };
// }

// Task 3

import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>My Static Site</title>
        <meta name="description" content="This is a sample static site." />
        <meta property="og:title" content="My Static Site" />
        <meta
          property="og:description"
          content="This is a sample static site using Next.js."
        />
      </Head>
      <h1>Welcome to My Static Site</h1>
      <img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_-640x400.png" alt="Example Image" loading="lazy" />
    </>
  );
}
