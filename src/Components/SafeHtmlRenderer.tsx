import parse, { type HTMLReactParserOptions } from 'html-react-parser';

interface SafeHtmlRendererProps {
  html: string;
  className?: string;
}

export default function SafeHtmlRenderer({ html, className = '' }: SafeHtmlRendererProps) {
  const options: HTMLReactParserOptions = {
    replace: (_domNode) => {
      // Return undefined implicitly
    },
  };

  return (
    <div
      className={`prose prose-lg prose-headings:font-roboto prose-headings:font-medium prose-p:font-openSans prose-p:leading-relaxed prose-p:text-black max-w-none ${className}`}>
      {parse(html, options)}
    </div>
  );
}
