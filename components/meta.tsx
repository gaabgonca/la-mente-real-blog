import Head from "next/head";
import {
  BLOG_TITLE,
  CMS_NAME,
  HOME_OG_IMAGE_URL,
  OG_DESCRIPTION,
  PRODUCTION_URL,
} from "../lib/constants";
import createOgImage from "../lib/createOgImage";

const Meta = () => {
  const ogImage = createOgImage();
  return (
    <Head> 
      <link
        rel="shortcut icon"
        type="image/svg+xml"
        href="/new-favicon/favicon.svg"
      />
      <link rel="icon" type="image/png" href="/new-favicon/favicon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={OG_DESCRIPTION} />
      {/* Facebook Meta Tags */}
      <meta property="og:image" itemProp="image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={BLOG_TITLE} />
      <meta property="og:site_name" content={BLOG_TITLE} />
      <meta property="og:description" content={OG_DESCRIPTION} />
      <meta property="og:url" content={PRODUCTION_URL} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="lamentereal.com" />
      <meta property="twitter:url" content={PRODUCTION_URL} />
      <meta name="twitter:title" content={BLOG_TITLE} />
      <meta name="twitter:description" content={OG_DESCRIPTION} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default Meta;
