import pgp from "pg-promise";
import ticketRepository from "../../application/repository/TicketRepository";
import Ticket from "../../domain/entities/Ticket";

export default class TicketRepositoryDatabase implements ticketRepository {
    async save(ticket: Ticket): Promise<void> {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/postgres");
        await connection.query("insert into fullcycle.ticket (ticket_id, event_id, email, status) values ($1, $2, $3, $4)", [ticket.ticketId, ticket.eventId, ticket.email, ticket.status]);
		await connection.$pool.end();
    }

    async update(ticket: Ticket): Promise<void> {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/postgres");
        await connection.query("update fullcycle.ticket set status = $1 where ticket_id = $2", [ticket.status, ticket.ticketId]);
		await connection.$pool.end();
    }

	async get(ticketId: string): Promise<Ticket> {
		const connection = pgp()("postgres://postgres:123456@localhost:5432/postgres");
		const [ticketData] = await connection.query("select * from fullcycle.ticket where ticket_id = $1", [ticketId]);
		await connection.$pool.end();
		return new Ticket(ticketData.ticket_id, ticketData.event_id, ticketData.email, ticketData.status);
	}
}