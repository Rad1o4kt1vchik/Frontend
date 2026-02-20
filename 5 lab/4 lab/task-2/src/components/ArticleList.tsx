import type { Article } from '../types/article';
import ArticleItem from './ArticleItem';

// Props interface — Ch. 5, Implementing an article list component
interface ArticleListProps {
  articles: Article[];
  onClickRemove: (id: number) => void;
}

export default function ArticleList({ articles, onClickRemove }: ArticleListProps) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}
