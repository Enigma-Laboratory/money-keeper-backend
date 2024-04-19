const whitelist = ['http://localhost:3000'];

const corsOptions = (req: any, callback: Function): void => {
  const origin = req.headers.origin;
  const isAllowedOrigin = whitelist.includes(origin);
  callback(null, { origin: isAllowedOrigin });
};

export { corsOptions };
