/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        MODEL_API: process.env.MODEL_API,
        API: process.env.API,
        SECRET: process.env.SECRET,
        UPLOAD: process.env.UPLOAD
    },
    images: {
        domains: ["media.istockphoto.com","e7.pngegg.com"],
    },
    swcMinify: true
}