import Tag from "./tag";

interface StackListProps {
  stack: string[];
}

export default function StackList({ stack }: StackListProps) {
  return (
    <ul className="flex w-full flex-wrap items-center text-sm">
      {stack.map((item) => (
        <li className="mr-2 mt-3" key={`stack-${item}`}>
          <Tag name={item} size="sm" />
        </li>
      ))}
    </ul>
  );
}
