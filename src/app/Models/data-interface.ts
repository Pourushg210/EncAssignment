
export class Users{
    public id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public age:number;
    public companyId: string;
}

export class Company{
    public id: string;
    public name: string;
    public logo: string;
    public description:string;
}
export class ContactPerson{
    public name: string;
    public  country: string;
    public  phone: string;
    public  id: number
}