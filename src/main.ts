import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

(async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Work Dashboard API')
    .addTag('Jira', 'Jira API endpoints')
    .setDescription('Dashboard for productivity measurement')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
})();
