export interface Product {
    id: string;
    code: string;
    name: string;
    image: string;
    description: string;
    insuredLimit: number;
    status: ProductStatus;
    covers: Cover[];
    questions: Question[];
}

export interface Cover {
    code: string;
    name: string;
    description: string;
    optional: boolean;
    totalInsured: number;
}

export interface Question {
    code: string;
    index: number;
    text: string;
    type: number;
    choices: Choice[];
}

export interface Choice {
    code: string;
    label: string;
}

export interface Answer {
    type: number;
    answer: string;
    questionCode: string;
    question: Question;
}

export class Offer {
    constructor() {
        const oneYerFromNowDate = new Date();
        oneYerFromNowDate.setFullYear(oneYerFromNowDate.getFullYear() + 1);

        this.productCode = '';
        this.policyFrom = new Date();
        this.policyTo = oneYerFromNowDate;
        this.selectedCovers = [];
    }

    productCode: string;
    policyFrom: Date;
    policyTo: Date;
    selectedCovers: string[];
    answers: Answer[];
}

export interface Price {
    offerNumber: string;
    totalPrice: number;
    coverPrices: any;
}

export enum ProductStatus {
    Draft = 0,
    Active = 1,
    Discontinued = 2
}
