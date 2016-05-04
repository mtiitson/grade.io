import Work from './Work';

export default class LabWork extends Work {
    constructor(lab, grade, authors) {
        super(grade, authors);
        this.lab = lab;
    }
}
