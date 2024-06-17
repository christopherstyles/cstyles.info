import clsx from "clsx";

interface TagProps {
  name: string;
  size?: "xs" | "sm" | "md";
}

export default function Tag({ name, size = "md" }: TagProps) {
  return (
    <div
      className={clsx(
        size === "xs" && "gap-1.5 px-2 py-0.5 text-xs",
        size === "sm" && "gap-2 px-2.5 py-1 text-sm",
        size === "md" && "gap-2.5 px-4 py-2 text-sm",
        "flex items-center whitespace-nowrap rounded-full border border-neutral-200 bg-neutral-100/50 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300",
      )}
    >
      {name}
    </div>
  );
}
