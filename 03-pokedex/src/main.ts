import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //setting prefix /api for all routes
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, //transform data throught the Dto (in this case with pagination string to number)
      transformOptions: { enableImplicitConversion: true }, //transform options
    })
  )

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server running on port ${process.env.PORT}`)
}
bootstrap();
