interface StackListProps {
  stack: string[];
}

export default function StackList({ stack }: StackListProps) {
  return (
    <ul className="flex w-full flex-wrap items-center text-sm">
      {stack.map((item, index) => (
        <li className="mr-2 mt-3" key={`stack-${index}`}>
          <div className="rounded-full bg-neutral-200 px-4 py-2 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-200">
            {item}
          </div>
        </li>
      ))}
    </ul>
  );
}
