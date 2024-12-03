/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Ensures Next.js generates a static export
    basePath: '/madkammeret', // Replace <REPOSITORY_NAME> with the name of your GitHub repo
    assetPrefix: '/madkammeret/', // Required for loading static assets
  };
  
  export default nextConfig;
  