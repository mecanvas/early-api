"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const canvas_module_1 = require("./canvas/canvas.module");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const typeorm_1 = require("@nestjs/typeorm");
const CanvasDividedOrder_entities_1 = require("./canvas/entities/CanvasDividedOrder.entities");
const CanvasSingleOrder_entities_1 = require("./canvas/entities/CanvasSingleOrder.entities");
const admin_module_1 = require("./admin/admin.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.NODE_ENV === 'production'
                    ? process.env.DB_HOSTNAME
                    : 'localhost',
                port: 3306,
                username: process.env.NODE_ENV === 'production'
                    ? process.env.DB_USERNAME
                    : process.env.DB_DEVUSER,
                password: process.env.NODE_ENV === 'production'
                    ? process.env.DB_PASSWORD
                    : process.env.DB_DEVPASS,
                database: process.env.NODE_ENV === 'production'
                    ? process.env.DB_DATABASE
                    : process.env.DB_DEVBASE,
                entities: [CanvasDividedOrder_entities_1.CanvasDividedOrder, CanvasSingleOrder_entities_1.CanvasSingleOrder],
                autoLoadEntities: true,
                charset: 'utf8mb4',
                synchronize: process.env.NODE_ENV !== 'production',
                logging: true,
                keepConnectionAlive: true,
            }),
            canvas_module_1.CanvasModule,
            admin_module_1.AdminModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map