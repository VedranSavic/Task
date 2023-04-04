export interface SetUserInputType {
    setUserInput: React.Dispatch<React.SetStateAction<string>>;
    userInput: string;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    suite: string;
    zipcode: string;
    street: string;
    city: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserType {
    name: string;
    address: Address;
    phone: string;
    company: Company;
}

export interface UsersArrayType {
    users: Array<UserType>;
}

