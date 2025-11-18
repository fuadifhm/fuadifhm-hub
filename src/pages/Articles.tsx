import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Tag } from 'lucide-react';
import PostCard from '@/components/PostCard';
import WaveBackground from '@/components/WaveBackground';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import postsData from '@/data/posts.json';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(postsData.flatMap((post) => post.tags))
  );

  // Filter articles
  const articles = postsData.filter((post) => post.type === 'article');

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative">
      <WaveBackground />
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Articles
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Tulisan tentang teknologi, design, dan kehidupan
          </p>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tags Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <Badge
              variant={!selectedTag ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Articles List */}
        <div className="space-y-6">
          {filteredArticles.map((article, index) => (
            <PostCard key={article.id} post={article} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground">
              Tidak ada artikel yang ditemukan
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Articles;
