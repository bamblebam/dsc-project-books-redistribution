class User{
    constructor(id,username,password,email,addedbooks,phone,education,bio,photoURL,createdAt){
        this.id =id;
        this.username =username;
        this.password = password;
        this.email = email;
        this.addedbooks = addedbooks; //Integer
        this.phone = phone;
        this.education = education;
        this.bio = bio;
        this.photoURL = photoURL;
        this.createdAt =createdAt;
    }
}

module.exports = User;