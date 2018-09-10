import request from '../utils/request';
import getURL from '../utils/url';

export function query() {
  return request(getURL('/mock/api/users'));
}
