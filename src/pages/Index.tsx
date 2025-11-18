import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import EnhancedThreeScene from '@/components/EnhancedThreeScene';
import PostCard from '@/components/PostCard';
import FloatingCard3D from '@/components/FloatingCard3D';
import DNAHelix from '@/components/DNAHelix';
import postsData from '@/data/posts.json';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <DNAHelix />
      {/* Hero Section with 3D */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EnhancedThreeScene />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <Sparkles className="w-12 h-12 mx-auto text-primary animate-glow" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="glow-text-cyan">Hai, saya </span>
              <span className="gradient-text">Fahmi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Selamat datang di ruang pribadi saya di web.
              <br />
              <span className="text-primary">Selamat datang di dunia saya 🔥</span>
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center gap-4 text-sm text-muted-foreground"
            >
              <span>Developer</span>
              <span className="w-1 h-1 rounded-full bg-primary animate-glow"></span>
              <span>Designer</span>
              <span className="w-1 h-1 rounded-full bg-secondary animate-glow"></span>
              <span>Creator</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Feed Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Latest Updates
            </h2>
            <p className="text-muted-foreground">
              Artikel terbaru, proyek, dan update dari dunia digital saya
            </p>
          </motion.div>

          <div className="space-y-6">
            {postsData.map((post, index) => (
              <FloatingCard3D key={post.id} intensity={10}>
                <PostCard post={post} index={index} />
              </FloatingCard3D>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
