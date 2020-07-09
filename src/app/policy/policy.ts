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

export interface PolicyOffer {
    offerNumber: string;
    policyHolder: PolicyHolder;
    policyHolderAddress: PolicyHolderAddress;
}

export interface PolicyHolder {
    firstName: string;
    lastName: string;
}

export interface PolicyHolderAddress {
    zipCode: string;
    street: string;
    city: string;
    country: string;
}
