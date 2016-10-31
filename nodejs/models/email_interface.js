module.exports = class EmailInterface {
    constructor(receiver, sender, title, content, starred, read, sentiment) {
        this.receiver = receiver;
        this.sender = sender;
        this.title = title;
        this.content = content;
        this.starred = starred;
        this.read = read;
        this.sentiment = sentiment;
    }
};