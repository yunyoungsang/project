const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { // 이름
        type: String,
        maxlength: 50
    },
    email: { // 이메일
        type: String,
        trim: true, // 공백 제거
        unique: 1 // 중복 불가
    },
    password: { // 비밀번호
        type: String,
        minlength: 5
    },
    lastname: { // 성
        type: String,
        maxlength: 50
    },
    role: { // 관리자, 일반 유저
        type: Number,
        default: 0
    },
    image: String, // 이미지
    token: { // 유효성 관리
        type: String
    },
    tokenExp: { // 토큰 유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }