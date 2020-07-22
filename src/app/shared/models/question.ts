import {
    CodeEntity,
    Choice
} from '.';

export interface Question extends CodeEntity {
    index: number;
    text: string;
    type: number;
    choices: Choice[];
}
