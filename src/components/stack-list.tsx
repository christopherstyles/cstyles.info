import Tag from "./tag";

export default function StackList({ stack }: { stack: string[] }): JSX.Element {
  return (
    <ul className="flex w-full flex-wrap items-center gap-3 text-sm">
      {stack.map((item, index) => (
        <li
          className="rounded-full bg-neutral-200 px-4 py-2 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-200"
          key={`stack-${index}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
