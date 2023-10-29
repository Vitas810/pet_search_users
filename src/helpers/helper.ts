export interface IUser {
    id: number
    name: string
    email: string
    phone: string
    username: string
    website: string
    address: Object
    company: {
        name: string
    }
    value: {
        id: number
        name: string
        email: string
        phone: string
        username: string
        value: string
        website: string
        address: Object
        company: {
            name: string
        }
    }
}