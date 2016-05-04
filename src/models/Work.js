export default class Work {
    constructor(grade, authors) {
        this.grade = grade;
        this.authors = authors;
    }
    getCoauthors(author) {
        if (!this.authors || !this.authors.length) {
            return [];
        } 
        if (this.authors.indexOf(author) < 0) {
            return this.authors;
        }
        return this.authors.filter(coauthor => {
            return coauthor !== author;
        });
    }
}

