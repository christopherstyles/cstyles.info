import Image, { type StaticImageData } from "next/image";

interface PhotoProps {
  image: StaticImageData;
  title: string;
}

export default function Photo({ image, title }: PhotoProps) {
  return (
    <div className="grid w-full grid-cols-1 items-start justify-end gap-4 md:grid-cols-[1fr_60%] md:gap-8">
      <div className="order-last font-mono text-sm uppercase text-neutral-400 dark:text-neutral-500 md:sticky md:top-10 md:order-first">
        {title}
      </div>

      <div className="relative flex justify-end">
        <Image
          className="w-full"
          loading="lazy"
          src={image}
          alt={title}
          quality={100}
        />
      </div>
    </div>
  );
}
