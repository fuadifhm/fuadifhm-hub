import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ParticlesBackground from '@/components/ParticlesBackground';
import GeometricShapes from '@/components/GeometricShapes';

const About = () => {
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'Three.js',
    'Tailwind CSS',
    'Framer Motion',
    'Next.js',
    'PostgreSQL',
    'WebGL',
    'GSAP',
    'UI/UX Design',
    'Figma',
  ];

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:fahmi@example.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative">
      <ParticlesBackground />
      <GeometricShapes />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1"
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold gradient-text">
                F
              </div>
            </motion.div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Fahmi
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Full-stack Developer & Designer
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Saya adalah seorang developer dan designer yang passionate dalam menciptakan 
                pengalaman digital yang memorable dan fungsional. Dengan pengalaman di web 
                development, 3D graphics, dan UI/UX design, saya selalu mencari cara untuk 
                menggabungkan teknologi dan kreativitas.
              </p>
              <p className="text-foreground leading-relaxed">
                Di waktu luang, saya suka eksplorasi teknologi baru, contribute ke open-source 
                projects, dan berbagi pengetahuan melalui artikel dan tutorial.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="outline"
                      className="h-auto py-4 flex flex-col gap-2"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="w-6 h-6" />
                        <span className="text-sm">{social.label}</span>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-6">
            Saya selalu terbuka untuk project baru dan kolaborasi menarik
          </p>
          <Button size="lg" asChild>
            <a href="mailto:fahmi@example.com">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
