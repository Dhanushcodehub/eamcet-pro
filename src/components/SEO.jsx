import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, path = "" }) => {
  const fullTitle = `${title} | EAMCET Pro`;
  const url = `https://eamcetpro.tech${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://eamcetpro.tech/og-image.png?v=3" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content="https://eamcetpro.tech/og-image.png?v=3" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": fullTitle,
          "description": description,
          "url": url,
          "publisher": {
            "@type": "Organization",
            "name": "EAMCET Pro",
            "logo": {
              "@type": "ImageObject",
              "url": "https://eamcetpro.tech/og-image.png"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
