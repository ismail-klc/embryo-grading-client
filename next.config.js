/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        MODEL_API: process.env.MODEL_API,
        API: process.env.API,
        SECRET: process.env.SECRET
    },
    images: {
        domains: ["media.istockphoto.com"],
    },
    swcMinify: true
}