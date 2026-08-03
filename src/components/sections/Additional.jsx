import Button from "../ui/Button";

export default function Additional() {
  return (
    <div className="flex flex-col gap-[30px] items-center text-center">
      <div className="flex flex-col gap-[10px] lg:gap-0">
        <h1 className="text-3xl text-secondary font-bold lg:text-[32px]">
          Butuh Teman Cerita?
        </h1>
        <p className="w-full lg:w-[638px]">
          Jangan ragu untuk menghubungi kami. Tim konselor PIK-R SAGA siap
          mendengarkan dan membantu kamu.
        </p>
      </div>
      <Button className="w-auto px-[30px]" variant="secondary">Hubungi Kami Sekarang</Button>
    </div>
  );
}
