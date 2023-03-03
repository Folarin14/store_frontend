interface User {
    fullName: string;
    mailAddress: string;
    eMail: string;
    creditCard: number | string;
    cashSpent?: string | number;
}

export default User