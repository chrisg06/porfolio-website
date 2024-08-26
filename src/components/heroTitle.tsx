interface HeroTitleProps {
    title: string;
};

export default function HeroTitle({ title }: HeroTitleProps) {
    return (
        <>
        <h1 className="pt-8 bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold tracking-tighter text-transparent">
          {title}
        </h1>
        <hr className="mx-auto my-8 h-1 w-60 border-0 bg-gray-100" />
        </>
    );
}