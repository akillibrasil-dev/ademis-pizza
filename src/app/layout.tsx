import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Ademis Pizza | Gestão para pizzarias',description:'Central de gestão de cardápios, pedidos e produção para pizzarias.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>}
