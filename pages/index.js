import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
        aspernatur illum cum eaque, repellat est fugit similique. Blanditiis
        totam quaerat ullam natus numquam exercitationem, saepe explicabo. Autem
        perspiciatis placeat assumenda!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
        aspernatur illum cum eaque, repellat est fugit similique. Blanditiis
        totam quaerat ullam natus numquam exercitationem, saepe explicabo. Autem
        perspiciatis placeat assumenda!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
        aspernatur illum cum eaque, repellat est fugit similique. Blanditiis
        totam quaerat ullam natus numquam exercitationem, saepe explicabo. Autem
        perspiciatis placeat assumenda!
      </p>
      <Link href='/ninjas'>See Ninja Listing</Link>
    </div>
  );
}
