"use client";

export default function NewsCard({
  image,
  title,
  description,
  link,
}) {
  return (
    <div className="flex flex-col w-full h-[430px] rounded-[16px] overflow-hidden bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="overflow-hidden h-[220px]">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
      </div>
      <div className="flex flex-col flex-1 px-[30px] py-[25px] gap-[15px]">
        <h2 className="text-[20px] text-primary font-bold line-clamp-2">{title}</h2>
        <p className="text-[15px] leading-7 line-clamp-3">{description}</p>
        <a href={link} className="mt-auto font-semibold text-accent hover:underline" > Baca Selengkapnya →</a>
      </div>
    </div>
  );
}