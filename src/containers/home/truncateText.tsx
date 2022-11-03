export default function truncateText(text: string, length = 100) {
  if (length > text.length) return text;
  return text.slice(0, length - 3) + "...";
}
