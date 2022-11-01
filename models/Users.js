const { Schema, Model } = require('mongoose');

const UserSchema = new Schema ({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-zA-Z0-9][a-z0-9._-]+[a-z0-9]){1,10}@[a-z0-9-]{2,50}.[a-z]{2,10}(.[a-z]{2,10})?$/g]
    },
     thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
    }
)

UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const Users = model('Users', UsersSchema);


module.exports = Users;