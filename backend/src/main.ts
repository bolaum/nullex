import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const log = new Logger('main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  const options = new DocumentBuilder()
    .setTitle('Nullex')
    .setDescription('Nullex API')
    .setVersion('0.1.0')
    .addTag('nullex')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.BACKEND_PORT);

  log.debug(`Listening on port ${process.env.BACKEND_PORT}`);
}
bootstrap();
