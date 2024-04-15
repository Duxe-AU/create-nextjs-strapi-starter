/** @type {import('next').NextConfig} */
const ssgConfig = process.env.NEXT_PUBLIC_BUILD_SSG === "1"
  ? {
    output: "export",
    distDir: "build",
  }: {}

const nextConfig = {
  ...ssgConfig,
  reactStrictMode: true,
  images: { unoptimized: true }
}

module.exports = nextConfig
