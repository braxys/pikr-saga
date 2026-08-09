import { groq } from "next-sanity";

export const allNewsQuery = groq`
    *[_type == "berita"] | order(publishedAt desc) {
        _id,
        title,
        author,
        slug,
        thumbnail,
        excerpt,
        content,
        publishedAt
    }
`;

export const newsBySlugQuery = groq`
  *[_type == "berita" && slug.current == $slug][0]{
    _id,
    title,
    author,
    slug,
    thumbnail,
    excerpt,
    content,
    publishedAt
  }
`;
