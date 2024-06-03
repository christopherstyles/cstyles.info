interface TagProps {
  name: string;
  size?: "sm" | "md";
}

export default function Tag({ name, size = "md" }: TagProps) {
  return (
    <div
      className={`${size === "sm" ? "px-2.5 py-1 text-sm" : "px-4 py-2 text-sm"} flex items-center gap-2.5 whitespace-nowrap rounded-full border border-neutral-200 bg-neutral-100/50 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300`}
    >
      {name}
    </div>
  );
}
