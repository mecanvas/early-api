import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filter/http.exception.filter';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';

const { PORT } = process.env;

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('mecanvas')
    .setDescription('MeCanvas API Docs')
    .setVersion('1.0')
    .build();

  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true, credentials: true });
  app.useGlobalFilters(new HttpExceptionFilter());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(PORT || 3000);
  console.log('server is running', `http://localhost:${PORT || 3000}`);
}

bootstrap();
