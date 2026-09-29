import { siteConfig } from '../data/siteConfig'
import { whatsappMessages } from '../data/whatsappMessages'
import type { WhatsAppContext } from '../data/whatsappMessages'

export function getWhatsAppUrl(context: WhatsAppContext = 'general'): string {
  const phone = siteConfig.phoneNormalized
  if (!/^[1-9]\d{7,14}$/.test(phone)) {
    throw new Error('Número do WhatsApp inválido: use apenas dígitos com código do país.')
  }
  if (!Object.hasOwn(whatsappMessages, context)) {
    throw new Error('Contexto do WhatsApp inválido.')
  }
  const url = new URL(`https://wa.me/${phone}`)
  url.searchParams.set('text', whatsappMessages[context])
  return url.toString()
}
