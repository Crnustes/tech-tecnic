'use client'

import { socials } from '@/config/socials'
import * as Icons from 'lucide-react'

interface Props {
  size?: number
  className?: string
  variant?: 'light' | 'dark'
}

export default function SocialIcons({ size = 22, className = '', variant = 'light' }: Props) {
  const colorClass = variant === 'light' ? 'text-white hover:text-t_accent' : 'text-t_dark hover:text-t_accent'

  const icons = [
    { href: socials.whatsapp, Icon: Icons.MessageCircle },
    { href: socials.instagram, Icon: Icons.Instagram },
    { href: socials.facebook, Icon: Icons.Facebook },
    { href: socials.linkedin, Icon: Icons.Linkedin },
    { href: socials.tiktok, Icon: Icons.Music },
    { href: socials.email, Icon: Icons.Mail },
  ]

  return (
    <div className={`flex gap-4 ${className}`}>
      {icons.map(({ href, Icon }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${colorClass} transition-transform transform hover:scale-110`}
        >
          <Icon className="transition-all" size={size} />
        </a>
      ))}
    </div>
  )
}
