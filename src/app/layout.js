import {AppProvider} from "@/components/AppContext";
import Header from "@/components/layout/Header";
import './globals.css'
import {Toaster} from "react-hot-toast";


export const metadata = {
  title: 'St.Fome',
  description: 'St.Fome',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <main className="max-w-4xl mx-auto p-4">
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2024 All rights reserved
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  )
}
