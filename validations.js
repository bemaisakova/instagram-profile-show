import { body } from 'express-validator';


export const loginValidation = [
  body('name', 'Имя должно быть больше 1 символа').isLength({ min: 1}),
  body('password', 'Пароль должен быть больше 1 символа').isLength({ min: 1}),
]