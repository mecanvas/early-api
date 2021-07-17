import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CanvasModule } from './canvas/canvas.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanvasDividedOrder } from './canvas/entities/CanvasDividedOrder.entities';
import { CanvasSingleOrder } from './canvas/entities/CanvasSingleOrder.entities';
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
          ? process.env.RDS_HOSTNAME
          : 'localhost',
      port:
        process.env.NODE_ENV === 'production' ? +process.env.RDS_PORT : 3306,
      username:
        process.env.NODE_ENV === 'production'
          ? process.env.RDS_USERNAME
          : process.env.DB_DEVUSER,
      password:
        process.env.NODE_ENV === 'production'
          ? process.env.RDS_PASSWORD
          : process.env.DB_DEVPASS,
      database:
        process.env.NODE_ENV === 'production'
          ? process.env.RDS_DB_NAME
          : process.env.DB_DEVBASE,
      entities: [CanvasDividedOrder, CanvasSingleOrder],
      autoLoadEntities: process.env.NODE_ENV !== 'production',
      charset: 'utf8mb4',
      synchronize: process.env.NODE_ENV !== 'production',
      logging: true,
      keepConnectionAlive: process.env.NODE_ENV !== 'production',
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
