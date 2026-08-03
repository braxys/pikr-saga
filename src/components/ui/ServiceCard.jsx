import Image from "next/image";

export default function ServiceCard({
    image,
    title,
    description,
}) {
    return (
      <div className="flex flex-col w-full rounded-[16px] overflow-hidden bg-white shadow-md min-h-[409px] pb-[30px] gap-[30px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover"
        />
        <div className="flex flex-col w-full px-[40px] gap-[15px] text-center">
          <h2 className="text-[26px] text-primary font-bold w-full">{title}</h2>
          <p className="w-full">{description}</p>
        </div>
      </div>
    );
}