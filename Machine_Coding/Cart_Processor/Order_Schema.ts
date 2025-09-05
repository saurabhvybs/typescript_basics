import { z } from "zod";

const CartItemsSchema = z.object ({
    productId : z.string().min(1),
    quantity : z.number().int().positive().default(0)
});

const ShippingDetailSchema = z.object({
    recipientName : z.string().min(1),
    addressLine1 : z.string().min(1),
    addressLine2 : z.string().optional(),
    city : z.string().min(1),
    state : z.string().min(1),
    zipCode : z.string().min(1),
    country : z.string().min(1),
    countryCode : z.string().min(2).max(2),
    contactNumber : z.string().min(10).max(10)
});

const PaymentDetailSchema = z.object ({
    paymentMethod : z.enum(['credit_card', 'debit_card', 'paypal', 'wallet', 'upi']),
    transactionToken : z.string().min(1)
});

const MetadataSchema =  z.object({
    discountCode : z.string().optional(),
    customerNotes : z.string().optional()
});
export const CheckoutPayload = z.object({
    userId : z.string().min(1),
    cartItems : z.array(CartItemsSchema).min(1),
    shippingDetails : ShippingDetailSchema,
    paymentDetails : PaymentDetailSchema,
    metadata : MetadataSchema

});