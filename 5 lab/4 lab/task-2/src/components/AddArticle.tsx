import type { ChangeEvent } from 'react';

// Props interface — Ch. 5, Implementing an AddArticle component
interface AddArticleProps {
  name: string;
  title: string;
  summary: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSummary: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickAdd: () => void;
}

export default function AddArticle({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}: AddArticleProps) {
  return (
    <section>
      <h1>{name}</h1>

      {/* Controlled inputs — state lives in ArticleManager */}
      <input
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
        style={{ display: 'block', marginBottom: 8, padding: 6, width: 300 }}
      />
      <input
        placeholder="Summary"
        value={summary}
        onChange={onChangeSummary}
        style={{ display: 'block', marginBottom: 8, padding: 6, width: 300 }}
      />
      <button onClick={onClickAdd}>Add</button>
    </section>
  );
}
