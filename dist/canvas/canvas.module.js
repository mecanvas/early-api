"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasModule = void 0;
const common_1 = require("@nestjs/common");
const canvas_service_1 = require("./canvas.service");
const canvas_controller_1 = require("./canvas.controller");
const CanvasDividedOrder_entities_1 = require("./entities/CanvasDividedOrder.entities");
const typeorm_1 = require("@nestjs/typeorm");
const CanvasSingleOrder_entities_1 = require("./entities/CanvasSingleOrder.entities");
let CanvasModule = class CanvasModule {
};
CanvasModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([CanvasDividedOrder_entities_1.CanvasDividedOrder, CanvasSingleOrder_entities_1.CanvasSingleOrder])],
        providers: [canvas_service_1.CanvasService],
        controllers: [canvas_controller_1.CanvasController],
    })
], CanvasModule);
exports.CanvasModule = CanvasModule;
//# sourceMappingURL=canvas.module.js.map