"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./filter/http.exception.filter");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const { PORT } = process.env;
async function bootstrap() {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('mecanvas')
        .setDescription('MeCanvas API Docs')
        .setVersion('1.0')
        .build();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(cookieParser());
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(PORT || 3000);
    console.log('server is running', `http://localhost:${PORT || 3000}`);
}
bootstrap();
//# sourceMappingURL=main.js.map