import type { AnchorHTMLAttributes } from 'react'

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'dark' | 'light' | 'ghost'
}

// CTAs são navegação: semântica de link, aparência compartilhada de botão.
export function Button({ variant = 'dark', className = '', children, ...props }: ButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`} {...props}>
      <span>{children}</span><span className="button__arrow" aria-hidden="true">↗</span>
    </a>
  )
}
