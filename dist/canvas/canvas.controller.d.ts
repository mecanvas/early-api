import { CanvasService } from './canvas.service';
import { CanvasSaveRequestDto } from './dto/CanvasSaveRequest.dto';
export declare class CanvasController {
    private readonly canvasService;
    constructor(canvasService: CanvasService);
    sendToDividedCanvas(req: any, data: CanvasSaveRequestDto): Promise<string>;
    uploadDividedImage(req: any): Promise<any>;
    sendToSingleCanvas(req: any, data: CanvasSaveRequestDto): Promise<string>;
    uploadSingleImage(req: any): Promise<any>;
}
