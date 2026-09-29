import { getWhatsAppUrl } from '../utils/whatsapp'
import type { WhatsAppContext } from '../data/whatsappMessages'
import { Button } from './Button'
import type { ButtonProps } from './Button'

type Props = Omit<ButtonProps, 'href' | 'target' | 'rel'> & { context?: WhatsAppContext }

export function WhatsAppLink({ context = 'general', ...props }: Props) {
  // Mesma aba em todos os CTAs: não surpreende o usuário com novas janelas.
  return <Button href={getWhatsAppUrl(context)} {...props} />
}
