import { CanvasDividedOrder } from 'src/canvas/entities/CanvasDividedOrder.entities';
import { CanvasSingleOrder } from 'src/canvas/entities/CanvasSingleOrder.entities';
import { Repository } from 'typeorm';
export declare class AdminOrderService {
    private canvasDividedOrderRepository;
    private canvasSingleOrderRepository;
    constructor(canvasDividedOrderRepository: Repository<CanvasDividedOrder>, canvasSingleOrderRepository: Repository<CanvasSingleOrder>);
    getCanvasDividedOrder(page: number, perPage: number): Promise<{
        total: number;
        results: CanvasDividedOrder[];
    }>;
    getCanvasDividedOrderDetail(id: number): Promise<CanvasDividedOrder>;
    getCanvasSingleOrder(page: number, perPage: number): Promise<{
        total: number;
        results: CanvasSingleOrder[];
    }>;
    getCanvasSingleOrderDetail(id: number): Promise<CanvasSingleOrder>;
}
