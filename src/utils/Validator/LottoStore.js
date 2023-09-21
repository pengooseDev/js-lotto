import { WebErrorHandler } from '../../Model';
import { MESSAGE, NUMBER } from '../../constants';

export const LottoStore = WebErrorHandler.errorProxy({
  validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount < NUMBER.DEFAULT_TICKET_PRICE) {
      throw new Error(MESSAGE.ERROR.INSUFFICIENT_PURCHASE_AMOUNT);
    }
  },
});
