import { User, Product } from "./types";

// Mock database
export const UserData = new Map <string, User>([
    ['usr_valid', { id: 'usr_1a2b3c4d5e', name: 'Aarav Singh', isActive: true }],
    ['usr_inactive', { id: 'usr_2b3c4d5e6f7', name: 'Jane Doe', isActive: false }],
    ['usr_new', { id: 'usr_3c4d5e6f7g8', name: 'Priya Sharma', isActive: true }],
    ['usr_suspended', { id: 'usr_4d5e6f7g8h9', name: 'Rohan Mehta', isActive: false }],
    ['usr_vip', { id: 'usr_5e6f7g8h9i0', name: 'Aditi Verma', isActive: true }],
]);

export const ProductData = new Map <string, Product>([
     // Electronics
    ['p1_laptop', { id: 'p1', name: 'Zenith Laptop Pro 15"', price: 95000, stock: 10 }],
    ['p2_mouse', { id: 'p2', name: 'Logi Wireless Mouse', price: 1800, stock: 0 }],
    ['p3_keyboard', { id: 'p3', name: 'Cosmic Mechanical Keyboard', price: 4500, stock: 20 }],
    ['p4_headphones', { id: 'p4', name: 'AcousticBliss Headphones', price: 7500, stock: 15 }],
    ['p5_monitor', { id: 'p5', name: 'ViewSonic 24" IPS Monitor', price: 14000, stock: 8 }],
  
  // Books
    ['b1_fiction', { id: 'b1_fiction', name: 'The Silent River', price: 450, stock: 50 }],
    ['b2_tech', { id: 'b2_tech', name: 'Advanced TypeScript Patterns', price: 2200, stock: 30 }],

  // Home Goods
    ['h1_coffee', { id: 'h1_coffee', name: 'Aromatica Coffee Maker', price: 3500, stock: 12 }],
    ['h2_lamp', { id: 'h2_lamp', name: 'Edison Desk Lamp', price: 1200, stock: 25 }],
]);