import { defineField, defineType } from "sanity";
import { createElement } from "react";

const QuoteStyle = ({ children }) =>
  createElement(
    "blockquote",
    {
      style: {
        borderLeft: "3px solid var(--card-border-color)",
        margin: 0,
        paddingLeft: "1rem",
      },
    },
    children,
  );

export const beritaType = defineType({
  name: "berita",
  title: "Berita",
  type: "document",

  groups: [
    { name: "konten", title: "Konten", default: true },
    { name: "publikasi", title: "Publikasi" },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      group: "konten",
      placeholder: "Contoh: Kegiatan Edukasi Kesehatan Remaja",
      description: "Gunakan judul yang singkat dan mudah dipahami.",
      validation: (Rule) =>
        Rule.required().max(120).error("Judul maksimal 120 karakter."),
    }),

    defineField({
      name: "author",
      title: "Penulis",
      type: "string",
      group: "publikasi",
      placeholder: "Nama penulis",
      description: "Nama penulis yang akan ditampilkan pada halaman berita.",
    }),

    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      group: "konten",
      options: {
        hotspot: true,
      },
      description: "Pilih gambar utama; area fokus dapat disesuaikan.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Ringkasan",
      type: "text",
      rows: 3,
      group: "konten",
      placeholder: "Tulis ringkasan singkat yang menarik...",
      description: "Ringkasan yang ditampilkan pada kartu berita (maksimal 200 karakter).",
      validation: (Rule) =>
        Rule.required().max(200).error("Ringkasan maksimal 200 karakter."),
    }),

    defineField({
      name: "content",
      title: "Isi Berita",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Judul 1", value: "h1" },
            { title: "Judul 2", value: "h2" },
            { title: "Judul 3", value: "h3" },
            { title: "Kutipan", value: "quote", component: QuoteStyle },
            {
              title: "Kutipan (format lama)",
              value: "blockquote",
              component: QuoteStyle,
            },
          ],
        },
      ],
      group: "konten",
      description:
        "Susun berita dengan paragraf, judul bagian, daftar, dan kutipan.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Tanggal dan Waktu Publikasi",
      type: "datetime",
      group: "publikasi",
      initialValue: () => new Date().toISOString(),
      description:
        "Tanggal ini ditampilkan kepada pembaca dan digunakan untuk mengurutkan berita.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "publikasi",
      description: "Bagian URL berita. Klik Generate setelah mengisi judul.",
      options: {
        source: "title",
        slugify: (input) =>
          input
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "")
            .slice(0, 96)
            .replace(/-+$/g, ""),
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "author",
      media: "thumbnail",
      publishedAt: "publishedAt",
    },
    prepare({ title, subtitle, media, publishedAt }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : null;

      return {
        title: title || "Berita tanpa judul",
        subtitle: [subtitle, date].filter(Boolean).join(" · ") || "PIK-R SAGA",
        media,
      };
    },
  },
});