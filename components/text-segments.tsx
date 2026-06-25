import Link from "next/link";
import type { TextBlock, TextSegment } from "@/content/types";

export function TextSegments({
  segments,
}: {
  segments: readonly TextSegment[];
}) {
  return (
    <>
      {segments.map((seg, i) =>
        typeof seg === "string" ? (
          <span key={i}>{seg}</span>
        ) : (
          <Link
            key={i}
            href={seg.href}
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            {seg.label}
          </Link>
        ),
      )}
    </>
  );
}

export function TextBlockContent({ block }: { block: TextBlock }) {
  if (typeof block === "string") {
    return <>{block}</>;
  }
  return <TextSegments segments={block} />;
}
