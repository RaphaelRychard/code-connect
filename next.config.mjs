/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com/viniciosneves',
        port: '',
        pathname: '**',
      }
      
    ]
  }

};

// https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png

export default nextConfig;
