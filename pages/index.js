import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
        aspernatur illum cum eaque, repellat est fugit similique. Blanditiis
        totam quaerat ullam natus numquam exercitationem, saepe explicabo. Autem
        perspiciatis placeat assumenda!
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
        aspernatur illum cum eaque, repellat est fugit similique. Blanditiis
        totam quaerat ullam natus numquam exercitationem, saepe explicabo. Autem
        perspiciatis placeat assumenda!
      </p>
      <Link   href='/ninjas'>
        <a className={styles.btn}>
          See Ninja Listing
        </a>
        </Link>
    </div>
  );
}
