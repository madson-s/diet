import path from 'path';
import { Express } from 'express';
import { promises as fs } from 'fs';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const port = 8080;

async function loadSwaggerPathsAndSchemas() {
  const docsDirectory = path.join(__dirname, '../docs');
  const files = await fs.readdir(docsDirectory);
  
  const swaggerPaths = {};
  const swaggerSchemas = {};

  for (const file of files) {
    const filePath = path.join(docsDirectory, file);
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const jsonContent = JSON.parse(fileContent);
      
      if (file.endsWith('.doc.json')) {
        Object.assign(swaggerPaths, jsonContent);
      } else if (file.endsWith('.schema.json')) {
        Object.assign(swaggerSchemas, jsonContent);
      }

    } catch (error) {
      console.error(`Error loading documentation file ${file}:`, error);
    }
  }

  return [swaggerSchemas, swaggerPaths];
}

export async function setupSwagger(app: Express): Promise<void> {
  const [swaggerSchemas, swaggerPaths ] = await loadSwaggerPathsAndSchemas();
  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'DIET API',
      version: '1.0.0',
      description: 'LADOC - DIET API Description',
    },
    servers: [
      { url: `http://localhost:${port}` },
    ],
    paths: swaggerPaths,
    components: {
      schemas: swaggerSchemas,
    },
  };

  const swaggerSpec = swaggerJsDoc({
    definition: swaggerDefinition,
    apis: [],
  });

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}