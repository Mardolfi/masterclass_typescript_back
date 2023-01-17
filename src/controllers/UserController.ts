import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "diego", email: "diego@rocketseat.com" }];

const emailService = new EmailService();

class UserController {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
  async sendMail(req: Request, res: Response) {
      emailService.sendMail({
        to: { name: "diego", email: "diego@rocketseat.com" },
        message: { subject: "kill someone", body: "i want kill you later" },
      })

      return res.send();
  }
}

export default UserController;
