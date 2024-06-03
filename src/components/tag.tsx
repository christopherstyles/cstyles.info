interface TagProps {
  name: string;
}

export default function Tag({ name }: TagProps) {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-neutral-200 bg-neutral-100/50 px-4 py-2 pl-4 pr-5 text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
      {name}
    </div>
  );
}
