import express from 'express';
import cors from 'cors';

import { setupRouter } from './configs/router.config';
import { setupSwagger } from './configs/swagger.config';

const port = 8080;

async function init(): Promise<void> {
  
  const app = express();

  app.use(express.json())
  
  app.use(cors({
    origin: '*'
  }))

  await setupRouter(app);
  await setupSwagger(app);

  app.listen(port, () => console.log(`Server started on http://localhost:${port}`))
}

init();

