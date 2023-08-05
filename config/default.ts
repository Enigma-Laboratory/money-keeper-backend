require('dotenv').config();

export default {
  port: process.env.PORT,
  dbUri: 'mongodb+srv://tutuanle:5KceUHEmgGf2Brct@money-keeper.zuvtb7i.mongodb.net/?retryWrites=true&w=majority',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
  accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY,
  refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY,
  refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY,
};
