import { CanvasDividedOrder } from 'src/canvas/entities/CanvasDividedOrder.entities';
import { AdminOrderService } from './admin.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: AdminOrderService);
    getCanvasDividedOrder(page: number, perPage: number): Promise<{
        total: number;
        results: CanvasDividedOrder[];
    }>;
    getCanvasDividedOrderDetail(id: number): Promise<CanvasDividedOrder>;
    getCanvasSingleOrder(page: number, perPage: number): Promise<{
        total: number;
        results: import("../canvas/entities/CanvasSingleOrder.entities").CanvasSingleOrder[];
    }>;
    getCanvasSingleOrderDetail(id: number): Promise<import("../canvas/entities/CanvasSingleOrder.entities").CanvasSingleOrder>;
}
