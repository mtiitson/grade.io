export default class LabResult {

    constructor(lab, grade, date = new Date(), authors = []) {
        this.lab = lab;
        this.date = date;
        this.grade = grade;
        this.authors = authors;
    }

    getCoauthors(author) {
        if (!this.authors.length) {
            return this.authors;
        } 
        if (this.authors.indexOf(author) < 0) {
            return this.authors;
        }
        return this.authors.filter(coauthor => {
            return coauthor !== author;
        });
    }
}
