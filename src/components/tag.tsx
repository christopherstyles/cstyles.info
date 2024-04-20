interface TagProps {
  name: string;
}

export default function Tag({ name }: TagProps) {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap border border-white py-2 pl-4 pr-5 text-base">
      <div className="inline-flex h-2 w-2 rounded-full border border-white"></div>
      {name}
    </div>
  );
}
