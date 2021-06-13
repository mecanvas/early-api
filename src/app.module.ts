import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CanvasModule } from './canvas/canvas.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanvasOrder } from './canvas/entities/CanvasOrder.entities';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:
        process.env.NODE_ENV === 'production'
          ? process.env.DB_HOSTNAME
          : 'localhost',
      port: 3306,
      username:
        process.env.NODE_ENV === 'production'
          ? process.env.DB_USERNAME
          : process.env.DB_DEVUSER,
      password:
        process.env.NODE_ENV === 'production'
          ? process.env.DB_PASSWORD
          : process.env.DB_DEVPASS,
      database:
        process.env.NODE_ENV === 'production'
          ? process.env.DB_DATABASE
          : process.env.DB_DEVBASE,
      entities: [CanvasOrder],
      autoLoadEntities: true,
      charset: 'utf8mb4',
      synchronize: process.env.NODE_ENV !== 'production',
      logging: true,
      keepConnectionAlive: true,
    }),
    CanvasModule,
    AdminModule,
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
