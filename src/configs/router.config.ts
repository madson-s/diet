import { Express, Router } from 'express';
import { promises as fs } from 'fs';
import path from 'path';

export async function setupRouter(app: Express): Promise<void> {
  const router = Router();
  app.use('/api', router);
  
  const routesDirectory = path.join(__dirname, '../routes');

  const files = await fs.readdir(routesDirectory);

  files.filter(file => file.endsWith('route.ts') || file.endsWith('route.js')).forEach(async (file) => {
    const filePath = path.join(routesDirectory, file);
    const route = await import(filePath);
    route.default(router);
  });
};