import { Checkout_Payload,Cart_Item } from "./Order_Schema";
import { User, Product, Validation_Result, CheckoutResult } from "./types";
import { UserData, ProductData } from "./Mock_DB";

async function fetchAndValidateUser(userId : string) : Promise<Validation_Result<User>> {

    const user = await Array.from(UserData.values()).find(u => u.id === userId);

    if(!user){
        return {success :false, error :{code: "User Not Found", message : "user doesnot exist"}};
    }
    if(!user.isActive){
        return {success :false, error :{code: "User is InActive", message :"User is not Active"}};
    }
    console.log("User found and is active:", user);
    return { success : true, data: user };
    }

async function fetchAndValidateProduct(items : Cart_Item[]) : Promise<Validation_Result<Product[]>> {
    const productIds = items.map(item => item.productId);
    console.log("Fetching products:", productIds);
    const products = await Promise.all(
          productIds.map(pid => Array.from(ProductData.values()).find(p => p.id === pid))
    );

    const validatedProducts: Product[] = [];

    for(let i=0; i < items.length; i++){
        const item = items[i];
        const product = products[i];
        if (!product) {
            return { success: false, error: { code: "Product Not Found", message: `Product with ID ${item.productId} does not exist` } };
        }
        if (product.stock < item.quantity) {
            return { success: false, error: { code: "Insufficient Stock", message: `Insufficient stock for product ID ${item.productId}` } };
        }
        validatedProducts.push(product);
    }
    return {success :true, data: validatedProducts};
}

async function calculateTotal(trustedProducts :Product[],UserProducts: Cart_Item[]): Promise<Validation_Result<number>> {
  
  const total = UserProducts.reduce((sum, currentUserProduct) => {

    const matchingProduct = trustedProducts.find((Product) => Product.id === currentUserProduct.productId);
    if(matchingProduct){
      return sum + matchingProduct.price * currentUserProduct.quantity;
    }
    return sum;
  },0);
    return { success: true, data: total };
}

async function verifyPayment(){

}
async function saveOrderToDB(){

}

 async function processCheckout(payload : Checkout_Payload) : Promise<CheckoutResult> {

    const userResult =  await fetchAndValidateUser(payload.userId);
    console.log("userResult:", userResult);
    if(!userResult.success){
        return {success: false, message: "User Validation failed"}
    }

    const productResult = await fetchAndValidateProduct(payload.cartItems);
    console.log("productResult:", productResult);
    if(!productResult.success){
        return {success: false, message: "Product Validation failed"}
    }
    const totalSum = await calculateTotal(productResult.data, payload.cartItems);
    if(!totalSum.success){
        return {success: false, message: "Total Calculation failed"}
    }
    // const paymentResult = await verifyPayment(totalSum.data, payload.paymentDetails);
    // const orderId = await saveOrderToDB(payload, totalSum);

    return {success: true, message: "Order Placed Successfully", orderId : "ord_12345"};
}
const samplePayload: Checkout_Payload = {
      "userId": "usr_1a2b3c4d5e",
  "cartItems": [
    {
      "productId": "p3",
      "quantity": 1
    },
    {
      "productId": "p4",
      "quantity": 2
    }
  ],
  "shippingDetails": {
    "recipientName": "Aarav Singh",
    "addressLine1": "C-12, Hazratganj",
    "addressLine2": "Near Capital Cinema",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "zipCode": "226001",
    "country": "India",
    "countryCode": "IN",
    "contactNumber": "+919988776655"
  },
  "paymentDetails": {
    "paymentMethod": "upi",
    "transactionToken": "txn_razorpay_tok_fghij12345klmno"
  },
  "metadata": {
    "discountCode": "SAVE10",
    "customerNotes": "Please include a gift receipt."
  }
}
const result = processCheckout(samplePayload);
console.log(result);