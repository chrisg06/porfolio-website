interface HeroTitleProps {
  title: string;
  underline?: boolean;
}

export default function HeroTitle({
  title,
  underline = false,
}: HeroTitleProps) {
  return (
    <>
      <h1 className="pt-4 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold tracking-tighter text-transparent">
        {title}
      </h1>
      {underline && (
        <hr className="mx-auto my-4 h-1 w-60 border-0 bg-gray-100" />
      )}
    </>
  );
}