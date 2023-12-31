import Registry from "../../infra/registry/Registry";
import ticketRepository from "../repository/TicketRepository";

export default class AprroveTicket {
    ticketRepository: ticketRepository;

    constructor (readonly registry: Registry) {
        this.ticketRepository = registry.inject("ticketRepository");
    }

    async execute (input: Input): Promise<void> {
        const ticket = await this.ticketRepository.get(input.ticketId);
        ticket.approve();
        await this.ticketRepository.update(ticket);
    }
}

type Input = {
    ticketId: string,
}