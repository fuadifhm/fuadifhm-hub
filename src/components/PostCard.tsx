import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HolographicCard from '@/components/HolographicCard';

interface Post {
  id: number;
  title: string;
  type: string;
  date: string;
  tags: string[];
  excerpt: string;
}

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'project':
        return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'status':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link to={post.type === 'article' ? `/articles/${post.id}` : '#'}>
        <HolographicCard>
          <Card className="hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden">
          <CardHeader>
            <div className="flex items-start justify-between gap-4 mb-2">
              <Badge className={`${getTypeColor(post.type)} border`}>{post.type}</Badge>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{new Date(post.date).toLocaleDateString('id-ID', { 
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}</span>
              </div>
            </div>
            <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
            <CardDescription>{post.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-3 h-3 text-muted-foreground" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        </HolographicCard>
      </Link>
    </motion.div>
  );
};

export default PostCard;
