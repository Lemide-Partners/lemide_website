import Image from "next/image";

interface LogoProps {
  inverse?: boolean;
  width?: number;
  height?: number;
}

export function Logo({
  inverse = false,
  width = 140,
  height = 38,
}: LogoProps) {
  const src = inverse
    ? "/assets/images/Lemide_White.png"
    : "/assets/images/Lemide_Full.png";

  const alt = "Lemide Partners";

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="h-8 lg:h-9 w-auto object-contain"
      priority
    />
  );
}
