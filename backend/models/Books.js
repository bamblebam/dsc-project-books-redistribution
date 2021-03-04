class Book{
    constructor(id,userId,bookImage,booktitle,requested_users,created_at,description){
        this.id = id;
        this.userId = userId;
        this.bookImage = bookImage;
        this.booktitle = booktitle;
        this.requested_users = requested_users;
        this.created_at = created_at;
        this.description = description;
    }
}

module.exports = Book;
