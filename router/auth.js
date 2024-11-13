import express from 'express'
import * as authController from '../controller/auth.js'
import { body } from 'express-validator'
import { validate } from '../middleware/validator.js'

const router = express.Router()

const validateSignup = [
    body('username').trim().isLength({min:3}).withMessage('아이디 최소 3자 이상 입력').matches(/^[a-zA-Z0-9]*$/).withMessage('특수문자 사용불가'),
    body('password').trim().isLength({min:4}).withMessage('비밀번호 최소 4자 이상 입력'),
    body('email').trim().isEmail().withMessage('이메일 형식 확인'), validate
]

// 회원가입
router.post('/signup', validateSignup, authController.signup)

// 로그인
router.post('/login', authController.login)


// 로그인 유지
router.post('/me', authController.verify)


export default router