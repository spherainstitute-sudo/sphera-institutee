import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-inter flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wide">
          SPHERA <span className="text-gray-400">Institute</span>
        </h1>
        <nav className="flex space-x-4">
          <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
            Login
          </Button>
          <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
            Cadastro
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200">
            Testes
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200">
            Notícias
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Welcome to SPHERA Institute
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 max-w-2xl text-lg md:text-xl mb-8 font-open-sans"
        >
          Astrophysics and Space Exploration for all academic levels — from early learners to advanced researchers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg rounded-2xl">
            Start Now
          </Button>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800 text-sm">
        © {new Date().getFullYear()} SPHERA Institute. All rights reserved.
      </footer>
    </div>
  );
}
