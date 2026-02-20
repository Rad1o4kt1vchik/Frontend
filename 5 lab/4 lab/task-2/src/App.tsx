import ArticleManager from './components/ArticleManager';
import AddArticle from './components/AddArticle';
import ArticleList from './components/ArticleList';

// Render props pattern (Ch. 5) — parent injects components, no direct dependency
export default function App() {
  return (
    <ArticleManager
      addArticle={AddArticle}
      articleList={ArticleList}
    />
  );
}
