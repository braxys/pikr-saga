export const structure = (S) =>
  S.list()
    .title("PIK-R SAGA")
    .items([
      S.documentTypeListItem("berita")
        .title("Berita")
        .child(
          S.documentTypeList("berita")
            .title("Semua Berita")
            .defaultOrdering([
              { field: "publishedAt", direction: "desc" },
            ]),
        ),
    ]);
