import { LottoTicket } from '../../../src/Model';
import { NUMBER } from '../../../src/constants';

/**
 * 로또 티켓의 번호는 1-43 사이의 숫자들로 구성된다.
 * 당첨 번호는 6개이다.
 */

describe('LottoTicket은 1-43 사이의 번호와 보너스 번호로 이루어져있다.', () => {
  test('로또 티켓이 정상적으로 생성되는지 확인한다.', () => {
    const ticket = new LottoTicket();

    expect(ticket).toBeInstanceOf(LottoTicket);
  });

  test('로또 티켓의 번호는 1-43 사이의 숫자들로 구성된다.', () => {
    const ticket = new LottoTicket();
    const ticketNumbers = ticket.getTicketNumbers();
    const toBevalidTicketNumbers = ticketNumbers.every(
      (number) =>
        NUMBER.LOTTO_TICKET.MIN_RANGE <= number &&
        number <= NUMBER.LOTTO_TICKET.MAX_RANGE
    );

    expect(toBevalidTicketNumbers).toBeTruthy();
  });

  test('로또 티켓의 당첨 번호는 6개이다.', () => {
    const ticket = new LottoTicket();
    const numbers = ticket.getTicketNumbers();

    expect(numbers.length).toBe(6);
  });
});
