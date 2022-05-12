import sendRequest from './send-request';

const BASE_URL = '/api/checkout'

export function checkout(cart) {
    // Just send itemId for best security (no pricing)
    return sendRequest(BASE_URL, 'POST', { cart });
  }