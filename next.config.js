/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/cv",
    output: "export",  // <=== enables static exports
    distDir: 'docs',
    reactStrictMode: true,
}

module.exports = nextConfig
