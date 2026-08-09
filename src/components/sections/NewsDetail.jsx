import Image from "next/image";
import Link from "next/link";

import { PortableText } from "@portabletext/react";
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

    blockquote: ({ children }) => (
      <blockquote className="my-7 border-l-4 border-accent bg-pink-50 px-6 py-4 text-[18px] italic leading-8 text-primary">
        {children}
      </blockquote>
    ),
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
    <article className="mx-auto w-full">
      <Link
        href="/#berita"
        className="mb-8 inline-block text-md font-semibold text-secondary hover:underline hover:text-accent"
      >
        ← Kembali ke Berita
      </Link>

      <header className="mb-10">
        <h1 className="text-[40px] font-bold leading-tight text-primary">
          {news.title}
        </h1>

        <p className="mt-4 text-[15px] text-paragraph">
          {formatDate(news.publishedAt)}

          {news.author && (
            <>
              {" "}
              • Ditulis oleh <strong>{news.author}</strong>
            </>
          )}
        </p>
      </header>

      <div className="relative mb-10 h-[500px] w-full overflow-hidden rounded-[16px]">
        <Image
          src={urlFor(news.thumbnail).url()}
          alt={news.title}
          fill
          priority
          sizes="(max-width: 1000px) 100vw, 1000px"
          className="object-cover"
        />
      </div>

      <div className="w-full">
        <PortableText
          value={news.content}
          components={portableTextComponents}
        />
      </div>

      <div className="flex gap-5">
        <ShareButton />
        <CopyLinkButton />
      </div>
    </article>
  );
}
