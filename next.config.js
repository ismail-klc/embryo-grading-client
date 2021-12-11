/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        MODEL_API: process.env.MODEL_API,
        API: process.env.API
    },
    images: {
        domains: ["media.istockphoto.com"],
    },
    swcMinify: false
}