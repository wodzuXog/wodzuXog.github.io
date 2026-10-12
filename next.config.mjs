const nextConfig = { output: 'export', distDir: process.env.NODE_ENV === 'production' ? 'out' : '.next', devIndicators: false };
export default nextConfig;
