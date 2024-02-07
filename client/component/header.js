import Link from 'next/link';

export default ({ currentUser }) => {

    const links = [
        !currentUser && { label: 'Sign up', href: '/auth/signup' },
        !currentUser && { label: 'Sign in', href: '/auth/signin' },
        currentUser && { label: 'Sign out', href: '/auth/signout' },
    ]
        .filter(linkConfig => linkConfig) // Filter out the falsy values
        .map(({ label, href }) => <li key={href} className='nav-item'>
            <Link className="navbar-brand" href={href}>
                {label}
            </Link>
        </li>)

    return <nav className='navbar navbar-light bg-light'>
        <Link className="navbar-brand" href="/">
            GitTix
        </Link>

        <div className='d-flef justify-content-end'>
            <ul className='nav d-flex align-items-center'>
                {links}
            </ul>
        </div>
    </nav>
};

