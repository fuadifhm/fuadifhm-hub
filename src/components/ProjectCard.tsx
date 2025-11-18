import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import HolographicCard from '@/components/HolographicCard';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="h-full group"
    >
      <HolographicCard>
        <Card className="overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {project.featured && (
            <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur">Featured</Badge>
          )}
        </div>
        <CardHeader>
          <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex-1" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-2" />
                Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" className="flex-1" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 mr-2" />
                Code
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
      </HolographicCard>
    </motion.div>
  );
};

export default ProjectCard;
