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
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
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
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.RDS_HOSTNAME,
                port: 3306,
                username: process.env.RDS_USERNAME,
                password: process.env.RDS_PASSWORD,
                database: process.env.RDS_DB_NAME,
                entities: [CanvasDividedOrder_entities_1.CanvasDividedOrder, CanvasSingleOrder_entities_1.CanvasSingleOrder],
                autoLoadEntities: true,
                charset: 'utf8mb4',
                synchronize: true,
                logging: true,
                keepConnectionAlive: true,
            }),
            canvas_module_1.CanvasModule,
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map