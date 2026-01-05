import { motion } from "framer-motion";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Resume", href: "/Abdelrahman Khalafalla Resume.pdf" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdelrahman-khalafalla/",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <h2
              className="text-black"
              style={{ fontFamily: "Roboto", fontWeight: "bold" }}
            >
              Abdelrahman Khalafalla, BSc.
            </h2>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex space-x-8">
            {navItems.map((item, index) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <motion.b
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-blue-700 font-extrabold hover:text-blue-900 transition-colors"
                  >
                    {item.label}
                  </motion.b>
                </a>
              ) : (
                <motion.b
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-black transition-colors cursor-pointer font-bold"
                >
                  {item.label}
                </motion.b>
              )
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
