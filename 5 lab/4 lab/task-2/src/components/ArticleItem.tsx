import { useState } from 'react';
import type { Article } from '../types/article';

// Props interface
interface ArticleItemProps {
  article: Article;
  onClickRemove: (id: number) => void;
}

// Ch. 5 — ArticleItem owns its own expansion state (isOpened)
export default function ArticleItem({ article, onClickRemove }: ArticleItemProps) {
  // Local toggle state — not stored in parent (Ch. 5 — better performance)
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const onClickToggle = (): void => {
    setIsOpened((prev) => !prev);
  };

  return (
    <li style={{ marginBottom: 12 }}>
      {/* Toggle link */}
      <a
        href={`#${article.id}`}
        title="Toggle Summary"
        onClick={(e) => {
          e.preventDefault();
          onClickToggle();
        }}
      >
        {article.title}
      </a>

      {/* Remove button */}
      <button
        onClick={() => onClickRemove(article.id)}
        style={{ marginLeft: 12 }}
      >
        Remove
      </button>

      {/* Summary shown based on local isOpened state */}
      <p style={{ display: isOpened ? 'block' : 'none' }}>{article.summary}</p>
    </li>
  );
}
