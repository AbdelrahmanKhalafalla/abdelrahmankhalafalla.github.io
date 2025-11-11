import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Code2, Palette, Zap } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my priority.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Combining aesthetics with functionality to create beautiful interfaces.',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing every detail to ensure the best user experience.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate developer with a keen eye for design and a love for creating
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzYyNDU4NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-black mb-4">My Journey</h3>
            <p className="text-gray-600 mb-4">
              With over 5 years of experience in web development and design, I've had
              the privilege of working on diverse projects ranging from small business
              websites to large-scale applications.
            </p>
            <p className="text-gray-600 mb-6">
              I believe in continuous learning and staying up-to-date with the latest
              technologies and design trends. My goal is to create digital products
              that not only look great but also provide value to users.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'Figma'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
