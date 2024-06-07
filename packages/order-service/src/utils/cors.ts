const whitelist = ['http://localhost:3000', 'http://localhost:4000', 'https://pencusto-dev.netlify.app'];

const corsOptions = (req: any, callback: Function): void => {
  const origin = req.headers.origin;
  const isAllowedOrigin = whitelist.includes(origin);
  callback(null, { origin: isAllowedOrigin });
};

export { corsOptions };
