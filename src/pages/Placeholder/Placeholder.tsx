import './Placeholder.scss';

interface PlaceholderProps {
  title: string;
}

export function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="placeholder">
      <h1 className="title">{title}</h1>
      <p className="text">This page will be implemented later.</p>
    </div>
  );
}
