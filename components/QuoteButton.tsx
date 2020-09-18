import Link from "next/link";
import Button from "styled-components/Button";

export default function QuoteButton() {
  return (
    <Link href="/quote">
      <Button type="button" primary>
        Get a Quote
      </Button>
    </Link>
  );
}
