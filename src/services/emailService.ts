import * as nodemailer from 'nodemailer'

export class EmailService {
    private transporter: nodemailer.Transporter

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })
    }

    async sendEmail(email: string, vagaName: string, file: Buffer, fileName: string, mimeType: string): Promise<void> {
        try {
            const result = await this.transporter.sendMail({
                from: process.env.EMAIL_FROM,
                to: process.env.EMAIL_RECIPIENT,
                subject: 'Novo Currículo Recebido',
                html: String.raw`
        <!DOCTYPE html>
        <html lang="pt-BR">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Novo Currículo Recebido</title>
          </head>

          <body>
            <h1>Novo currículo recebido</h1>

            <p>
              Um novo currículo foi enviado através do site.
            </p>

            <p>
              <strong>E-mail:</strong> ${email}
            </p>

            <p>
              <strong>Vaga:</strong> ${vagaName}
            </p>

            <p>
              O currículo está disponível em anexo.
            </p>
          </body>
        </html>
      `,
                attachments: [
                    {
                        filename: fileName,
                        content: file,
                        contentType: mimeType,
                    },
                ],
            })

            if (!result.accepted?.length) {
                throw new Error('Falha ao enviar e-mail.')
            }
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error)
            throw error
        }
    }
}
