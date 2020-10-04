import { GeoLocation } from './geoLocation';

export class Address {

  street?: string;
  houseNumber?: string;
  postalcode?: string;
  city?: string;
  geoLocation?: GeoLocation;

  constructor(
    street: string,
    housenumber: string,
    postalcode: string,
    city: string,
    geoLocation: GeoLocation) {
    this.street = street;
    this.houseNumber = housenumber;
    this.postalcode = postalcode;
    this.city = city;
    this.geoLocation = geoLocation;
  }
}
