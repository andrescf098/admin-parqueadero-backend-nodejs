import express, { json, urlencoded } from 'express';
import routerApi from './routes/index.js';
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} from './middleware/error.handler.js';
import './utils/auth.util.js';
import cors from 'cors';

// const whiteListCORS = ['http://localhost:3000'];
// const options = {
//   origin: (origin, callback) => {
//     if (
//       whiteListCORS.includes(origin) ||
//       (!origin && process.env.NODE_ENV !== 'production')
//     ) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed'));
//     }
//   },
// };
const app = express();

app.use(cors());
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Error: ' + err.message);
});
app.use(json());

routerApi(app);
app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
