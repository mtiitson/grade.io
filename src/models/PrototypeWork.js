import Work from './Work';

export default class PrototypeWork extends Work {
    constructor(proto, grade, authors, comment, submission) {
	super(grade, authors);
        this.proto = proto;
        this.comment = comment;
        this.submission = submission;
    }
}
