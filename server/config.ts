const serverPort = 6010;
const isProd = () => !process.env.NODE_ENV;

export {
    isProd,
    serverPort
};
