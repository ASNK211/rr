const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        userId: { type: String },
        usdtId: {
            type: String,
            default: ""
        },
        balance: {
            type: Number,
            default: 0,
        },
        percentage: {
            type: Number,
            default: 2,
        },
        profit: {
            type: Number,
            default: 0,
        },
        active: {
            type: String,
            default: false,
        },
        inviteId: {
            type: String,
            default: ""
        },
        date: { type: String, default: new Date() }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);