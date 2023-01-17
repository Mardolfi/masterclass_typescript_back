"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        return `Email enviado para ${to.name}: ${message.subject}`;
    }
}
exports.default = EmailService;
