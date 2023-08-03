import Ticket from "../../domain/entities/Ticket";

export default interface ticketRepository {
    save(ticket: Ticket): Promise<void>;
    update(ticket: Ticket): Promise<void>;
    get(ticketId: string): Promise<Ticket>;
}