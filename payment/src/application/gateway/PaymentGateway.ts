export default interface PaymentGateway {
    createTransaction(input: Input): Promise<Output>;
}

export type Input = {
    email: string,
    creditCardToken: string,
    price: number,
}

export type Output = {
    tip: string,
    status: string
}