import { Branch } from './model/branch';
import { Address } from './model/address';
import { GeoLocation } from './model/geoLocation';

export const BRANCHES: Branch[] = [
    new Branch("ING", "0", new Address("Sterrebos","2","5344 AM","Oss", new GeoLocation("1","2"))),
    new Branch("ING", "1", new Address("Sterre","5","5555 AM","Oss", new GeoLocation("1","2")))
];

