const whitelist = ['http://localhost:3001'];

const corsOptions = function (req: any, callback: Function) {
  let corsOptions;
  if (whitelist.indexOf(req.headers.origin) !== -1) corsOptions = { origin: true };
  else corsOptions = { origin: false };
  callback(null, corsOptions);
};

export { corsOptions };
