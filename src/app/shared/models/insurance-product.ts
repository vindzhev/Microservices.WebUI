import {
    CodeEntity,
    Cover, Question
} from '.';

export interface InsuranceProduct extends CodeEntity {
    id: string;
    name: string;
    imagePath: string;
    description: string;
    insuredLimit: number;
    status: number;
    covers: Cover[];
    questions: Question[];
}
