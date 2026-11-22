const URL_PATTERN = /((?:https?:\/\/|www\.)[^\s]+)/g;

export default function LinkifiedText({ text }) {
  return text.split(URL_PATTERN).map((part, i) => {
    if (i % 2 === 0) return part;
    const trailing = part.match(/[.,!?)]+$/)?.[0] || "";
    const url = part.slice(0, part.length - trailing.length);
    return (
      <span key={i}>
        <a
          href={url.startsWith("www.") ? `https://${url}` : url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
        {trailing}
      </span>
    );
  });
}
