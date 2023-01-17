interface IMailTo {
    name: string,
    email: string
}

interface IMailMessage {
    subject: string,
    body: string,
    attatchments ?: Array<string>
}

interface IMail {
    to: IMailTo,
    message: IMailMessage,
}

class EmailService {
    sendMail({to, message} :IMail) {
        return `Email enviado para ${to.name}: ${message.subject}`
    }
}

export default EmailService;