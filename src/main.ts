import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {

  // определяем тип для нашего приложения:
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // используем useStaticAssets , переопределяем путь, указываем куда по умолчанию сохран,далее на папку выше и формируем папку паблик,далее указывается преИК ПО КОТОРМОУ МЫ ОБРАЩАЕМСЯ К РАЗДЕЛУ (С КЛИЕНТА) :
  app.useStaticAssets(join(__dirname, '..', 'public'), {prefix:'/public'});

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

  })
  await app.listen(3000);
}
bootstrap();
