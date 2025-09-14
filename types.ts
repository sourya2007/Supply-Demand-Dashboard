export enum StockStatus {
  InStock = 'in-stock',
  LowStock = 'low-stock',
  OutOfStock = 'out-of-stock',
}

export interface InventoryItem {
  id: number;
  name: string;
  stock: number;
  unit: string;
  status: StockStatus;
}

export enum PaymentMethod {
  UPI = 'UPI',
  Card = 'Card',
  Wallet = 'Wallet',
}

export interface Transaction {
  id: string;
  customerName: string;
  amount: number;
  method: PaymentMethod;
  timestamp: string;
}

export interface Customer {
  id: string;
  name: string;
  points: number;
  maxPoints: number;
}

export interface DailySummary {
    totalSales: number;
    newCustomers: number;
    pendingOrders: number;
}

export enum OrderStatus {
    Pending = 'Pending',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
}

export interface Order {
    id: string;
    customerName: string;
    amount: number;
    status: OrderStatus;
    items: number;
}