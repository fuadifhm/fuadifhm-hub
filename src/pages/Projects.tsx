import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import FloatingCard3D from '@/components/FloatingCard3D';
import RotatingRings from '@/components/RotatingRings';
import { Button } from '@/components/ui/button';
import projectsData from '@/data/projects.json';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects =
    filter === 'featured'
      ? projectsData.filter((project) => project.featured)
      : projectsData;

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative">
      <RotatingRings />
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Showcase proyek yang telah dan sedang saya kerjakan
          </p>

          {/* Filter Buttons */}
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <div className="flex gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => setFilter('all')}
                size="sm"
              >
                All Projects
              </Button>
              <Button
                variant={filter === 'featured' ? 'default' : 'outline'}
                onClick={() => setFilter('featured')}
                size="sm"
              >
                Featured Only
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <FloatingCard3D key={project.id} intensity={15}>
              <ProjectCard project={project} index={index} />
            </FloatingCard3D>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground">No projects found</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
