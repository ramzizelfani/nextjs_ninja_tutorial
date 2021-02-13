import Link from 'next/link'
export const getStaticPaths = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    const paths = data.map(ninja => {
      return {
        params: { ninjoun: ninja.id.toString()}
      }
    })
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error)
    return {
      paths: [],
      fallback: false
    }
  }
}
export const getStaticProps = async ({params}) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.ninjoun}`)
    const data = await res.json()
    return {
      props: { ninja: data }
    }
  } catch (error) {
    console.log(error)
    return {
      props: { ninja: {}}
    }
  }
}

export default function ninja({ninja}) {
  return (
    <div className='ninja-details'>
      <h1>{ninja.name}</h1>
      <p> <span>Email:</span>  {ninja.email}</p>
      <p> <span>Phone:</span> {ninja.phone}</p>
      <p> <span>Website:</span> {ninja.website}</p>
      <p> <span>Company:</span> {ninja.company.name}</p>
      <p> <span>Address:</span> {ninja.address.street}, {ninja.address.suite} {ninja.address.city} - {ninja.address.zipcode}</p>
      <Link href='/ninjas'> Back </Link>
    </div>
  );
}
