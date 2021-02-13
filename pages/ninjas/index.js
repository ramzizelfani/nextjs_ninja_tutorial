import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'
export default function index( { ninjas }) {
  return (
    <div>
      <h1>All Ninjas</h1>
        {ninjas.map( ninja => (
            <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
              <a className={styles.single}>
                <h3>{ninja.name}</h3>
              </a>
            </Link>
        ))}
          
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
      props: { ninjas: data }
    }
  } catch (error) {
    console.log(error)
    return {
      props: { ninjas: []}
    }
  }
}
