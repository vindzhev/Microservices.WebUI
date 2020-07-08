export interface Policy {
    number: string;
    dateFrom: Date;
    dateTo: Date;
    policyHolder: string;
    totalPremium: number;
    productCode: string;
    accountNumber: string;
    covers: string[];
}