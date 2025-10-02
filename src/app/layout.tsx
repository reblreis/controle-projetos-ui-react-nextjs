import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from "next/script";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema de controle de projetos',
  description: 'Sistema de Controle de Projetos. Interface para cadastro de projetos, alocação de equipes com papéis, gerenciamento de sprints e demandas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* folha de estilos do bootstrap */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
        {/* arquivo javascript principal do bootstrap via next/script */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  )
}