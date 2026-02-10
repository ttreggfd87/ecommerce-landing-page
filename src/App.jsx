import { motion } from 'framer-motion'
import { ShoppingBag, Zap, Shield, Globe, Star, ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl tracking-tight text-slate-900">SwiftCart</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Features</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Pricing</a>
              <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="lg:col-span-6 text-center lg:text-left"
            >
              <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm border border-blue-100">
                🚀 New Version 2.0 Released
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                Sell smarter with <span className="text-blue-600">AI-Powered</span> analytics.
              </motion.h1>
              <motion.p variants={itemVariants} className="mt-6 max-w-lg mx-auto lg:mx-0 text-lg sm:text-xl text-gray-500 line-clamp-3">
                Stop guessing. Start growing. SwiftCart gives you the tools to understand your customers and automate your marketing instantly.
              </motion.p>
              <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="flex items-center justify-center gap-2 px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:text-lg shadow-xl shadow-blue-600/20 transition-all hover:scale-105">
                  Start Free Trial <ArrowRight size={20} />
                </button>
                <button className="px-8 py-3.5 border border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 md:text-lg transition-all">
                  View Demo
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">U{i}</div>
                  ))}
                </div>
                <p>Trusted by 2,000+ Stores</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 lg:mt-0 lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl shadow-2xl bg-white p-4 border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
                  alt="Dashboard Preview"
                  className="rounded-xl w-full"
                />

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUpIcon />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Revenue</p>
                    <p className="text-lg font-bold text-slate-900">+$12,403</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Everything you need to <span className="text-blue-600">scale.</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Powerful tools designed for modern e-commerce growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-yellow-500" />}
              title="Lightning Fast"
              desc="Optimized for speed. Load pages in under 0.5s to maximize SEO and conversion rates."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-green-500" />}
              title="Bank-Grade Security"
              desc="PCI-compliant payments and encrypted customer data storage."
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-purple-500" />}
              title="Global Selling"
              desc="Multi-currency support and automated tax calculation for 150+ countries."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <ShoppingBag className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl">SwiftCart</span>
            </div>
            <p className="text-slate-400 text-sm">© 2024 SwiftCart Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
    >
      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </motion.div>
  )
}

function TrendingUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
  )
}

export default App
