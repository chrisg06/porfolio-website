export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-center py-4">
      <p>&copy; {year} Chris Gardiner</p>
    </footer>
  );
}
