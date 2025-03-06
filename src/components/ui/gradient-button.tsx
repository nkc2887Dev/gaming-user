import { IGradientButton } from "@/@types/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GradientButton = ({
  label,
  className = "",
  redirect = "",
  size,
  onclick,
}: IGradientButton) => {
  return (
    <Button
      onClick={onclick}
      {...(size ? { size } : {})}
      className={`${className} rounded-md font-bold border border-[1.5px] border-[#026473] bg-gradient-to-b from-[#64D3E5] to-[#126375] text-white shadow-md hover:bg-[#017082]`}
    >
      {redirect ? <Link href={redirect}>{label}</Link> : label}
    </Button>
  );
};

export default GradientButton;
