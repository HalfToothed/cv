/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/cv", // Set base path for GitHub Pages
    assetPrefix: "/cv", // Ensures all assets use the correct prefix
    output: "export",  // Enables static exports
    distDir: 'docs', // Outputs to `docs` for GitHub Pages
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable image optimization if needed
    },
}

module.exports = nextConfig
