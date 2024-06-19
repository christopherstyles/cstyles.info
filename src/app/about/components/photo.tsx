import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";

interface PhotoProps {
  className?: string;
  image: StaticImageData;
  title: string;
}

export default function Photo({ className, image, title }: PhotoProps) {
  return (
    <div className={clsx("relative flex justify-end", className)}>
      <Image
        className="w-full"
        loading="lazy"
        src={image}
        alt={title}
        quality={100}
      />
    </div>
  );
}
