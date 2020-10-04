import { Address } from './address';

export class Branch {
  type?: string;
  distance?: string;
  address?: Address;

  constructor(
    type: string,
    distance: string,
    addr: Address) {
      this.type = type;
      this.distance = distance;
      this.address = addr;
    }
}
