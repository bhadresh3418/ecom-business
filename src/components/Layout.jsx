import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  return (
    <div className="bg-white">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  )
}
