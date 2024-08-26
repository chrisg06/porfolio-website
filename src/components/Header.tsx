import Link from 'next/link';

const navigation = [
    {page: 'About', id: '#about'},
    {page: 'Skills', id: '#skills'},
    {page: 'Projects', id: '#projects'},
    {page: 'Contact', id: '#contact'},
];


export default function Header() {
    return (
        <header>
            <nav>
                <ul className="flex items-center justify-center">
                    {navigation.map((navItem) => (
                        <li key={navItem.id} className="py-4 px-8 hover:scale-125 duration-100">
                            <Link href={navItem.id} scroll={true} className="hover:text-sky-600">{navItem.page}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}