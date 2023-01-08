import '../styles/globals.css' 
import Navbar from './Navbar'
import Footer from './Footer'
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <div className="w-full h-full font-signika bg-white">
          <div className="">
            <Navbar />
            {/* <Home /> */}
              {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
