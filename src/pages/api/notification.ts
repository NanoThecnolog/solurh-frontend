import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import fs from 'node:fs/promises'
import { EmailService } from '@/services/emailService'
import { debug } from '@/utils/DebugLogger'

export const config = {
    api: {
        bodyParser: false,
    },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST'])
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    }
    debug.log('Recebendo requisição de envio de currículo')
    try {
        const form = formidable({
            maxFiles: 1,
            maxFileSize: 10 * 1024 * 1024,
        })
        debug.log('Processando formulário de envio de currículo')

        const [fields, files] = await form.parse(req)
        debug.log('Campos recebidos:', fields)
        debug.log('Arquivos recebidos:', files)

        const email = fields.email?.[0]
        const file = files.file?.[0]
        const vagaName = fields.vagaName?.[0]

        if (!file) {
            debug.log('Arquivo não enviado.')
            return res.status(400).json({
                message: 'Currículo não enviado.',
            })
        }

        if (!email) {
            debug.log('E-mail não informado.')
            return res.status(400).json({
                message: 'E-mail não informado.',
            })
        }

        const buffer = await fs.readFile(file.filepath)

        debug.log('Enviando e-mail para:', email, 'com o arquivo:', file.originalFilename, 'e vaga:', vagaName)

        const emailService = new EmailService()

        await emailService.sendEmail(
            email,
            vagaName ?? 'Não informado',
            buffer,
            file.originalFilename ?? 'curriculo.pdf',
            file.mimetype ?? 'application/octet-stream',
        )
        debug.log('Email enviado com sucesso.')

        return res.status(200).json({
            result: {
                message: 'Currículo enviado com sucesso!',
            },
        })
    } catch (error) {
        debug.log('Erro ao processar currículo:', error)

        return res.status(500).json({
            message: 'Erro ao enviar currículo.',
        })
    }

    /*try {
    return res.status(200).json({
      code: 200,
      message: "ok",
    });
  } catch (err) {
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
    });
  }*/
}
