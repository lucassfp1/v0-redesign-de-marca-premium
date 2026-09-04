import Link from "next/link"

type BrandMarkProps = {
  inverse?: boolean
  compact?: boolean
}

export function BrandMark({ inverse = false, compact = false }: BrandMarkProps) {
  return (
    <Link
      href="#inicio"
      className={`brand-mark ${inverse ? "brand-mark--inverse" : ""}`}
      aria-label="ROSÉ Beauty — início"
    >
      <svg className="brand-mark__symbol" viewBox="0 0 34 34" aria-hidden="true">
        <path d="M6 29V5h10.3c5.4 0 8.7 2.8 8.7 7.2 0 3.5-2.1 5.9-5.7 6.8L28 29h-5.5l-8-9.3H11V29H6Zm5-13.5h4.6c2.8 0 4.3-1.1 4.3-3.2 0-2-1.5-3.1-4.3-3.1H11v6.3Z" fill="currentColor" />
        <circle cx="26.5" cy="6.5" r="2.5" fill="currentColor" />
      </svg>
      {!compact ? (
        <span className="brand-mark__word" aria-hidden="true">
          ROS<span className="brand-mark__accent">É</span>
        </span>
      ) : null}
    </Link>
  )
}
