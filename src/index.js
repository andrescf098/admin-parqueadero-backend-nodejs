import express, { json, urlencoded } from 'express';
import routerApi from './routes/index.js';
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} from './middleware/error.handler.js';
import './utils/auth.util.js';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

routerApi(app);
app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
