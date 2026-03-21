export function Footer() {
  return (
    <footer className="flex justify-center pt-10 pb-5">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Eric Zhong. All rights reserved.
      </p>
    </footer>
  );
}
