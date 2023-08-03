import PaymentGateway, {Input, Output} from "../../application/gateway/PaymentGateway";

export default class FakePaymentGateway implements PaymentGateway {
    async createTransaction(input: Input): Promise<Output> {
        return {
            tip: "12345678", 
            status: "approved",
        }
    }
}