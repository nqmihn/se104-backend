import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { TransformInterceptor } from './core/transform.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  app.useGlobalPipes(new ValidationPipe());
  const reflector = app.get(Reflector)
  app.useGlobalInterceptors(new TransformInterceptor(reflector))
  app.enableCors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "credentials": true,
  })
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
    defaultVersion: ['1']
  });

  const config = new DocumentBuilder()
    .setTitle('SE104 Docs Api')
    .setDescription('Api for E-commerce ')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(configService.get<string>("PORT"));
}
bootstrap();
