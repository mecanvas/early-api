import { CanvasDividedOrder } from 'src/canvas/entities/CanvasDividedOrder.entities';
import { Repository } from 'typeorm';
import { CanvasSaveRequestDto } from './dto/CanvasSaveRequest.dto';
import { CanvasSingleOrder } from './entities/CanvasSingleOrder.entities';
export declare class CanvasService {
    private canvasDividedOrderRepository;
    private canvasSingleOrderRepository;
    constructor(canvasDividedOrderRepository: Repository<CanvasDividedOrder>, canvasSingleOrderRepository: Repository<CanvasSingleOrder>);
    uploadImage(req: any): Promise<any>;
    sendToDividedCanvas(files: any, data: CanvasSaveRequestDto): Promise<string>;
    sendToSingleCanvas(files: any, data: CanvasSaveRequestDto): Promise<string>;
}
