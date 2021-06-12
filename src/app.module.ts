import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CanvasModule } from './canvas/canvas.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanvasOrder } from './canvas/entities/CanvasOrder';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database:
        process.env.NODE_ENV === 'production'
          ? process.env.DB_DATABASE
          : process.env.DB_DEVBASE,
      entities: [CanvasOrder],
      autoLoadEntities: true,
      charset: 'utf8mb4',
      synchronize: true,
      logging: true,
      keepConnectionAlive: true,
    }),
    CanvasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

// morgan 구현
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
