import { motion } from "framer-motion";
import { ArrowDown, Bold } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-100 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-purple-100 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 mb-4" style={{ fontFamily: 'Roboto' , fontSize:'60px', fontWeight: 'bold' }}>Hello World!</p>
            
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-8" style={{fontSize:'20px' , textAlign: 'center',  lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
          My name is <strong>Abdelrahaman Khalafalla</strong>, and I am a recent graduate in Electrical and Electronics Engineering with a strong passion for applying Artificial Intelligence and Machine Learning to real-world challenges — particularly in wireless communication systems and signal processing. 
          My career began in hardware engineering, specifically on designing electronic systems for IoT devices. 
          I am eager to leverage my skills and knowledge in a dynamic work environment, where I can contribute to innovative projects and continue to grow professionally to be among the best in the field.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-black transition-colors">
          <ArrowDown className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
}
