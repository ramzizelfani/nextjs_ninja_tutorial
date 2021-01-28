import Link from 'next/link';

export default function index() {
  return (
    <div>
      <h1>All Ninjas</h1>
      <ul>
        <li>
          <Link href='/ninjas/test'>
            <a>test</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
