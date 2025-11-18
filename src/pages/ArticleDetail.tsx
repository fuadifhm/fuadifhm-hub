import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import postsData from '@/data/posts.json';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = postsData.find((post) => post.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/articles">
            <Button>Back to Articles</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/articles">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline">{article.type}</Badge>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(article.date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {article.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-muted-foreground" />
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div
            className="whitespace-pre-wrap text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }}
          />
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border"
        >
          <h2 className="text-2xl font-bold mb-6">More Articles</h2>
          <div className="grid gap-4">
            {postsData
              .filter((post) => post.type === 'article' && post.id !== article.id)
              .slice(0, 3)
              .map((post) => (
                <Link
                  key={post.id}
                  to={`/articles/${post.id}`}
                  className="group p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArticleDetail;
