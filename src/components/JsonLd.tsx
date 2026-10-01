interface JsonLdProps {
  data: object;
}

// React escapes text children, so `<script>{JSON.stringify(data)}</script>`
// renders `&quot;` in the prerendered HTML and crawlers see invalid JSON-LD.
// Inject the raw JSON instead, escaping `<` so it can't close the tag.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
