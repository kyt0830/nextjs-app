"use client"
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

export function Controls() {
  const router = useRouter();
  const params = useParams();
  console.log(params);
  const id = params.id;
  return (
    <ul className='nav gap-1'>
      <li><Link href="/create" className='btn btn-primary'>Create</Link></li>
      {
        id &&
        <>
          <li><Link href={"/update/" + id} className='btn btn-secondary'>Modify</Link></li>
          <li><button className='btn btn-danger' onClick={() => {
            const options = { //전송할 방식
              method: 'DELETE'
            }
            fetch(`http://localhost:9999/topics/${id}`, options)
              .then()
              .then(() => {
                router.push(`/`);
                router.refresh();
                console.log(result)
              });
          }}>Delete</button></li>
        </>
      }

    </ul>
  );
}
