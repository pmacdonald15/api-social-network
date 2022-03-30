const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        //add virtual
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

//UserSchema
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

//creat user model using the userschema
const User = model('User', UserSchema);

module.exports = User;