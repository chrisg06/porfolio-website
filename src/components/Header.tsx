const navigation = [
    {page: 'Home', path: '/'},
    {page: 'About', path: '/about'},
    {page: 'Projects', path: '/projects'},
    {page: 'Contact', path: '/contact'},
];


export default function Header() {
    return (
        <header>
            <nav>
                <ul className="flex items-center justify-center">
                    {navigation.map((navItem) => (
                        <li key={navItem.path} className="py-4 px-8 hover:scale-125 duration-100">
                            <a href={navItem.path} className="hover:text-sky-600">{navItem.page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}