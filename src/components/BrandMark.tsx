import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  letterClassName?: string;
};

const BrandMark = ({ className, letterClassName }: BrandMarkProps) => {
  return (
    <span className={cn("monogram-mark h-16 w-16 text-primary", className)} aria-hidden>
      <span className={cn("-mt-0.5 text-5xl leading-none", letterClassName)}>S</span>
    </span>
  );
};

export default BrandMark;
