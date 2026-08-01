import Button from "../ui/Button";

export default function Additional() {
  return (
    <div className="flex flex-col gap-[30px] mx-[100px] items-center text-center">
      <div>
        <h1 className="text-[32px] text-secondary font-bold">
          Butuh Teman Cerita?
        </h1>
        <p className="w-[638px]">
          Jangan ragu untuk menghubungi kami. Tim konselor PIK-R SAGA siap
          mendengarkan dan membantu kamu.
        </p>
      </div>
      <Button className="w-auto px-[30px]" variant="secondary">Hubungi Kami Sekarang</Button>
    </div>
  );
}
