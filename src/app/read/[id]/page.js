


export default async function Read(props) {
    
    console.log('리드페이지 작동');
    console.log(props.params);
    const {id} = await props.params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`);
    const topic = await res.json();
    // console.log(topic);
  
    return (
        <>
            <h2>{topic.title}</h2>
            <p>{topic.message}</p>
        </>
    )
}