import Link from 'next/link';
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <a href='/'>
          <Image src="/logo.png" alt="logo img" width={128} height={77}/>
        </a>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
}
