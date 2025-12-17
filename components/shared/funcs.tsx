export default function SplitText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-1 split-word">
          {word}
        </span>
      ))}
    </span>
  );
}