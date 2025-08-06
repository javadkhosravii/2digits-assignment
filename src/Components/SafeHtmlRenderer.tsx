import parse, { type HTMLReactParserOptions } from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

interface SafeHtmlRendererProps {
  html: string;
  className?: string;
}

export default function SafeHtmlRenderer({ html, className = '' }: SafeHtmlRendererProps) {
  // Sanitize HTML to prevent XSS attacks
  const sanitizedHtml = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p',
      'br',
      'strong',
      'em',
      'u',
      'i',
      'b',
      'span',
      'div',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'ul',
      'ol',
      'li',
      'a',
      'img',
      'blockquote',
      'pre',
      'code',
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel'],
    ALLOW_DATA_ATTR: false,
  });

  const options: HTMLReactParserOptions = {
    replace: (_domNode) => {
      // Add any custom DOM node replacement logic here if needed
      // For now, we'll let the sanitized HTML pass through
    },
  };

  return (
    <div
      className={`prose prose-lg max-w-none prose-headings:font-roboto prose-headings:font-medium prose-p:font-openSans prose-p:leading-relaxed prose-p:text-black ${className}`}>
      {parse(sanitizedHtml, options)}
    </div>
  );
}
