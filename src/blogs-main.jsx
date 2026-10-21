import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Blogs from './components/Blogs.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './useReveal.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

function BlogsPage() {
  useReveal()
  return (
    <>
      <Navbar page="blogs" />
      <main>
        <Blogs />
      </main>
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogsPage />
  </React.StrictMode>,
)
