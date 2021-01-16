import Link from 'next/link';


const Navbar = () => {
    
    return (
        <div>
            <nav>
                <Link href="/">
                    <a >Home</a>
                </Link>
                <Link href="/about">
                    <a >About</a>
                </Link>
            </nav>
        </div>
    )
}
export default Navbar;