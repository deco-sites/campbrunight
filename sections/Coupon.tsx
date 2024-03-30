export interface CupomProps {
  cupomCode: string;
  cupomDescription: string;
}

export default function Cupom(
  { cupomCode = "BEMVINDO10", cupomDescription = "CUPOM DE BOAS VINDAS" }:
    CupomProps,
) {
  return (
    <div class="flex flex-col gap-2 w-full items-center justify-center my-8">
      <p class="text-sm font-bold w-[150px] text-center p-2 border-dashed border border-black hover:bg-black hover:text-white hover:boder-white duration-300">
        {cupomCode}
      </p>
      <p class="w-fit">{cupomDescription}</p>
    </div>
  );
}
