interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <section className="w-full max-w-[1200px] xl:mx-auto">{children}</section>
  );
}
