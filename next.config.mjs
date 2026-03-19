/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_OUTPUT || undefined,
  // Enable Next.js 16 cache components
  cacheComponents: true,
  turbopack: {
    root: process.cwd().replace('/next', ''),
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx'],
  async redirects() {
    if (process.env.NEXT_PUBLIC_API_URL === undefined) {
      console.warn(
        '[next.config] NEXT_PUBLIC_API_URL is not defined. Skipping redirect generation.'
      );
      return [];
    }

    let redirections = [];
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/redirections`
      );
      const result = await res.json();
      const redirectItems = result.data.map(({ source, destination }) => {
        return {
          source: `/:locale${source}`,
          destination: `/:locale${destination}`,
          permanent: false,
        };
      });

      redirections = redirections.concat(redirectItems);

      return redirections;
    } catch (error) {
      // Log warning but don't fail build - redirects are optional
      console.warn(
        '[next.config] Failed to fetch redirects from Strapi:',
        error instanceof Error ? error.message : error
      );
      return [];
    }
  },
};

export default nextConfig;
