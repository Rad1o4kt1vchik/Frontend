import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { Article } from '../types/article';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

// Render props types — Ch. 5, Render props pattern
interface AddArticleRenderProps {
  name: string;
  title: string;
  summary: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSummary: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickAdd: () => void;
}

interface ArticleListRenderProps {
  articles: Article[];
  onClickRemove: (id: number) => void;
}

// Optional render props — if not passed, default components are used
interface ArticleManagerProps {
  addArticle?: (props: AddArticleRenderProps) => React.JSX.Element;
  articleList?: (props: ArticleListRenderProps) => React.JSX.Element;
}

// Ch. 5 — Refactored from monolithic ArticleManager
export default function ArticleManager({
  addArticle,
  articleList,
}: ArticleManagerProps) {
  // Articles state
  const [articles, setArticles] = useState<Article[]>([
    { id: 1, title: 'First Article', summary: 'Summary of the first article.' },
    { id: 2, title: 'Second Article', summary: 'Summary of the second article.' },
  ]);

  // Form state — controlled inputs, lives in ArticleManager
  const [title, setTitle] = useState<string>('');
  const [summary, setSummary] = useState<string>('');

  // Add new article
  const onClickAdd = (): void => {
    if (!title.trim() || !summary.trim()) return;
    setArticles((prev) => {
      const newArticle: Article = {
        id: Date.now(),
        title,
        summary,
      };
      return [...prev, newArticle];
    });
    setTitle('');
    setSummary('');
  };

  // Remove article by id
  const onClickRemove = (id: number): void => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  // Render props — if provided, use them; otherwise use default imported components
  const renderAddArticle: React.JSX.Element = addArticle
    ? addArticle({
        name: 'Articles',
        title,
        summary,
        onChangeTitle: (e) => setTitle(e.target.value),
        onChangeSummary: (e) => setSummary(e.target.value),
        onClickAdd,
      })
    : (
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />
    );

  const renderArticleList: React.JSX.Element = articleList
    ? articleList({ articles, onClickRemove })
    : <ArticleList articles={articles} onClickRemove={onClickRemove} />;

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif' }}>
      {renderAddArticle}
      {renderArticleList}
    </div>
  );
}
