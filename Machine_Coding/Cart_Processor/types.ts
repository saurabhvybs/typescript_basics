export type User = {
  id: string;
  name: string;
  isActive: boolean;
};
export type Product = {
    id: string;
    name: string;
    price: number;
    stock: number;
};

export type Validation_Result<T> = {success : true, data : T} |
{success : false, error : { code : string, message : string }};

export type CheckoutResult = {
    success : boolean;
    message : string;
    orderId? : string; // is taken optional because is success is false then orderId wont be generated.
}