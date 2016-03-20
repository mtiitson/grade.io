export default class PrototypeResult {
    constructor(proto, grades, date = new Date(), authors = [], comment = '', submission = '') {
        this.proto = proto;
        this.grades = grades;
        this.date = date;
        this.authors = authors;
        this.comment = comment;
        this.submission = submission;
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
