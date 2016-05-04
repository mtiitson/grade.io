export default class Grade {
    constructor(criteria, comment, date = new Date()) {
        this.criteria = criteria;
        this.comment = comment;
	this.date = date;
    }
}
