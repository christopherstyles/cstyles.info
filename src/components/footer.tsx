import Social from "./social";

export default function Footer(): JSX.Element {
  return (
    <footer className="flex w-full items-center justify-between p-12 px-16">
      <h1 className="text-lg text-neutral-600 dark:font-light">
        ©️ {new Date().getFullYear()}
      </h1>
      <nav className="flex gap-4">
        <Social size="lg" />
      </nav>
    </footer>
  );
}
