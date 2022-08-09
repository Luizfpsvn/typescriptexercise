import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'luiz fernando', email: 'luiz@email.com' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({name: 'Luiz f.', email: 'luiz@email.com'}, { subject: 'you won a loan'})

    return res.send()
  }

  
};
