import Image from "next/image";

interface LogoProps {
  inverse?: boolean;
}

export function Logo({ inverse = false }: LogoProps) {
  const src = inverse
    ? "/assets/images/Lemide_White.png"
    : "/assets/images/Lemide_Dark.png";

  return (
    <Image
      src={src}
      alt="Lemide Partners"
      width={160}
      height={40}
      className="h-8 lg:h-9 w-auto"
      priority
    />
  );
}
