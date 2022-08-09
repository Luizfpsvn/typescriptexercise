interface ImailTo {
  name: string;
  email: string;
}

interface ImailMessage {
  subject: string;
  atachment?: string[];
}

class EmailService {
  sendMail(to: ImailTo, message: ImailMessage) {
    console.log(
      `Congrats ${to.name}, your email ${to.email} = ${message.subject} `
    );
  }
}

export default EmailService;
