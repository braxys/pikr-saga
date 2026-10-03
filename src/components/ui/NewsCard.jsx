import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/lib/image";
import { ArrowUpRight, CalendarDays, UserRound } from "lucide-react";

function formatDate(date) {
  if (!date) return null;

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function NewsCard({
  thumbnail,
  title,
  excerpt,
  slug,
  publishedAt,
  author,
}) {
  const formattedDate = formatDate(publishedAt);

  return (
    <article className="group flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_12px_40px_-24px_rgba(59,84,135,0.4)] transition duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(59,84,135,0.45)] focus-within:-translate-y-1.5">
      <Link
        href={`/berita/${slug.current}`}
        aria-label={`Baca berita: ${title}`}
        className="relative block aspect-[16/10] overflow-hidden bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
      >
        <Image
          src={urlFor(thumbnail).url()}
          alt={title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-primary shadow-sm backdrop-blur">
          PIK-R SAGA
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-secondary">
          {formattedDate && (
            <span className="inline-flex items-center gap-2">
              <CalendarDays aria-hidden="true" size={16} />
              <time dateTime={publishedAt}>{formattedDate}</time>
            </span>
          )}
          {author && (
            <span className="inline-flex items-center gap-2 text-paragraph/65">
              <UserRound aria-hidden="true" size={15} />
              <span className="line-clamp-1">{author}</span>
            </span>
          )}
        </div>

        <h2 className="line-clamp-2 text-xl font-bold leading-snug text-primary">
          <Link
            href={`/berita/${slug.current}`}
            className="rounded-sm transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {title}
          </Link>
        </h2>

        <p className="line-clamp-3 text-[15px] leading-7 text-paragraph/80">
          {excerpt}
        </p>

        <Link
          href={`/berita/${slug.current}`}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg pt-2 font-semibold text-accent transition-all hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Baca selengkapnya
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </article>
  );
}