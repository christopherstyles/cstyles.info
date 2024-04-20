import Social from "./social";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-screen-2xl items-center justify-between p-12 px-4 md:px-6">
      <h1 className="text-lg text-neutral-600 dark:font-light">
        ©️ {new Date().getFullYear()}
      </h1>
      <nav className="flex gap-4">
        <Social size="lg" />
      </nav>
    </footer>
  );
}
