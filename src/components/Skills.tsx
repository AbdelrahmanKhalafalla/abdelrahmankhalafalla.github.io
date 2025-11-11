import { motion } from "framer-motion";
;
 ;
import { 
  Code,  
  Database, 
  Brain,
  CircuitBoard ,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'SQL', 'MATLAB'],
    },
    {
      icon: Brain,
      title: 'AI/ML',
      skills: ['Tensorflow', 'PyTorch', 'Reinforcement Learning'],
    },
    {
      icon: Database,
      title: 'Data Visualization',
      skills: ['Plotly/Dash', 'Seaborn', 'Matplotlib', 'SQL'],
    },
    {
      icon: CircuitBoard ,
      title: 'Hardware Design',
      skills: ['Altium Designer', 'KiCad', 'LTSpice'],
    },
  ];

  const logoUrls: { [key: string]: string } = {
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'MATLAB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
    'Tensorflow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Plotly/Dash': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg',
    'Matplotlib': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4" style={{ fontSize: "30px" }}>Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            if (!category || !category.skills) return null;

            const Icon = category.icon;

            return (
              <motion.div
                key={category.title || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && (
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  )}
                  <h3 className="text-black">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full border border-gray-200 flex items-center gap-2"
                    >
                      {logoUrls[skill] && (
                        <img 
                          src={logoUrls[skill]} 
                          alt={`${skill} logo`} 
                          className="w-5 h-5" 
                        />
                      )}
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
