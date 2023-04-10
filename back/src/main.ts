import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "./prisma.service";
import {ValidationPipe, VersioningType} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // VALIDATE DTO
  app.useGlobalPipes(new ValidationPipe());

  // VERSIONING
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.HEADER,
    header: 'version',
  });

  // CORS
  app.enableCors();

  // PRISMA ORM
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)

  // PORT CONFIG
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);
}

bootstrap();
