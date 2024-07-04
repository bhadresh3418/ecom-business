import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  return (
    <div className="bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
