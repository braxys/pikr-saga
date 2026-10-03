import Image from "next/image";
import Link from "next/link";

import { PortableText } from "@portabletext/react";
import { ArrowLeft, CalendarDays, UserRound } from "lucide-react";
import { urlFor } from "@/lib/image";
import CopyLinkButton from "../ui/CopyLinkButton";
import ShareButton from "../ui/ShareButton";

function formatDate(date) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const QuoteBlock = ({ children }) => (
  <blockquote className="my-7 border-l-4 border-accent bg-pink-50 px-6 py-4 text-[18px] italic leading-8 text-primary">
    {children}
  </blockquote>
);

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[17px] leading-7 text-paragraph">{children}</p>
    ),

    h1: ({ children }) => (
      <h1 className="mt-10 mb-5 text-[32px] font-bold text-primary">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-[26px] font-bold text-primary">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-[22px] font-bold text-primary">
        {children}
      </h3>
    ),

    blockquote: QuoteBlock,
    quote: QuoteBlock,
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 ml-6 list-disc space-y-2 text-[17px] leading-8 text-paragraph">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="mb-5 ml-6 list-decimal space-y-2 text-[17px] leading-8 text-paragraph">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};

export default function NewsDetail({ news }) {
  return (
    <article className="mx-auto w-full max-w-5xl pb-14 pt-5 sm:pb-16 sm:pt-8">
      <Link
        href="/#berita"
        className="mb-6 inline-flex items-center gap-2 py-2 text-sm font-medium text-secondary transition hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:mb-7"
      >
        <ArrowLeft aria-hidden="true" size={17} />
        Semua berita
      </Link>

      <header className="mx-auto mb-7 max-w-4xl text-center sm:mb-9">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
          {news.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-paragraph/70 sm:mt-5">
          <span className="inline-flex items-center gap-2">
            <CalendarDays aria-hidden="true" size={16} className="text-accent" />
            <time dateTime={news.publishedAt}>
              {formatDate(news.publishedAt)}
            </time>
          </span>

          {news.author && (
            <span className="inline-flex items-center gap-2">
              <UserRound aria-hidden="true" size={16} className="text-accent" />
              <span>
                Ditulis oleh <strong className="font-semibold text-primary">{news.author}</strong>
              </span>
            </span>
          )}
        </div>
      </header>

      <div className="relative mx-auto mb-8 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-2xl bg-primary/5 shadow-[0_18px_45px_-30px_rgba(31,50,88,0.45)] sm:mb-10 sm:rounded-3xl">
        <Image
          src={urlFor(news.thumbnail).url()}
          alt={news.title}
          fill
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <div className="mx-auto w-full max-w-4xl px-1 sm:px-3">
        <PortableText
          value={news.content}
          components={portableTextComponents}
        />
      </div>

      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-between gap-4 border-t border-primary/10 pt-5 sm:mt-10 sm:pt-6">
        <p className="text-sm font-medium text-paragraph/65">
          Bagikan berita ini kepada temanmu
        </p>
        <div className="flex items-center gap-3">
          <ShareButton />
          <CopyLinkButton />
        </div>
      </div>
    </article>
  );
}
