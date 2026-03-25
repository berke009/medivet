import Link from "next/link";

type MedivetLogoProps = {
  className?: string;
  withWordmark?: boolean;
};

export function MedivetLogo({
  className = "",
  withWordmark = true,
}: MedivetLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 rounded-md outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700 ${className}`}
      aria-label="Medivet home"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white shadow-sm ring-1 ring-teal-800/20"
        aria-hidden
      >
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12c0-1.5 1-2.5 2.3-2.5 1.4 0 2.3 1 2.3 2.5v1.2c0 .6.4 1 1 1h.4c.6 0 1-.4 1-1V12c0-1.5 1-2.5 2.3-2.5 1.4 0 2.3 1 2.3 2.5v4.5c0 3.2-2.4 5.8-5.5 5.8s-5.5-2.6-5.5-5.8V12Z"
            fill="currentColor"
            opacity={0.92}
          />
          <path
            d="M22.5 9.5c-.8 0-1.5.4-2 1-.5-.6-1.2-1-2-1-1.6 0-2.8 1.4-2.8 3.1v3.4c0 2.3 1.7 4.2 3.9 4.5.2 0 .4.1.6.1h.2c2.2-.3 3.9-2.2 3.9-4.5v-3.4c0-1.7-1.2-3.1-2.8-3.1Z"
            fill="currentColor"
            opacity={0.85}
          />
        </svg>
      </span>
      {withWordmark ? (
        <span className="text-lg font-semibold tracking-tight text-teal-900">
          Medivet
        </span>
      ) : null}
    </Link>
  );
}
