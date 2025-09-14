import { InventoryItem, StockStatus, Transaction, PaymentMethod, Customer, DailySummary, Order, OrderStatus } from './types';

export const INVENTORY_DATA: InventoryItem[] = [
  { id: 1, name: 'Basmati Rice', stock: 20, unit: 'kg', status: StockStatus.InStock },
  { id: 2, name: 'Whole Milk', stock: 5, unit: 'liters', status: StockStatus.LowStock },
  { id: 3, name: 'Brown Bread', stock: 0, unit: 'loaves', status: StockStatus.OutOfStock },
  { id: 4, name: 'Organic Eggs', stock: 36, unit: 'units', status: StockStatus.InStock },
  { id: 5, name: 'Cheddar Cheese', stock: 8, unit: 'blocks', status: StockStatus.LowStock },
];

export const TRANSACTION_DATA: Transaction[] = [
  { id: 'TXN728', customerName: 'Ravi Kumar', amount: 450.00, method: PaymentMethod.UPI, timestamp: '10 min ago' },
  { id: 'TXN727', customerName: 'Priya Sharma', amount: 1250.50, method: PaymentMethod.Card, timestamp: '35 min ago' },
  { id: 'TXN726', customerName: 'Amit Singh', amount: 85.00, method: PaymentMethod.Wallet, timestamp: '1 hour ago' },
  { id: 'TXN725', customerName: 'Sunita Devi', amount: 300.00, method: PaymentMethod.UPI, timestamp: '2 hours ago' },
];

export const CUSTOMER_DATA: Customer[] = [
  { id: 'CUST001', name: 'Ravi Kumar', points: 150, maxPoints: 200 },
  { id: 'CUST002', name: 'Anjali Verma', points: 80, maxPoints: 200 },
  { id: 'CUST003', name: 'Vikram Rathore', points: 190, maxPoints: 200 },
  { id: 'CUST004', name: 'Sneha Patil', points: 45, maxPoints: 200 },
];

export const DAILY_SUMMARY_DATA: DailySummary = {
    totalSales: 12450.75,
    newCustomers: 12,
    pendingOrders: 5,
};

export const ORDERS_DATA: Order[] = [
    { id: 'ORD1024', customerName: 'Meera Desai', amount: 899.00, status: OrderStatus.Shipped, items: 3 },
    { id: 'ORD1023', customerName: 'Karan Malhotra', amount: 150.25, status: OrderStatus.Pending, items: 1 },
    { id: 'ORD1022', customerName: 'Priya Sharma', amount: 1250.50, status: OrderStatus.Delivered, items: 5 },
    { id: 'ORD1021', customerName: 'Alok Nath', amount: 420.00, status: OrderStatus.Delivered, items: 2 },
];

export const TOP_SELLING_PRODUCTS_DATA = [
  { name: 'Milk', sold: 400 },
  { name: 'Bread', sold: 300 },
  { name: 'Eggs', sold: 280 },
  { name: 'Rice', sold: 200 },
  { name: 'Cheese', sold: 150 },
];

export const PAYMENT_METHODS_DATA = [
  { name: 'UPI', value: 400 },
  { name: 'Card', value: 300 },
  { name: 'Wallet', value: 200 },
  { name: 'Cash', value: 100 },
];

export const SALES_TREND_DATA = [
  { name: 'Mon', sales: 2400 },
  { name: 'Tue', sales: 1398 },
  { name: 'Wed', sales: 9800 },
  { name: 'Thu', sales: 3908 },
  { name: 'Fri', sales: 4800 },
  { name: 'Sat', sales: 3800 },
  { name: 'Sun', sales: 4300 },
];