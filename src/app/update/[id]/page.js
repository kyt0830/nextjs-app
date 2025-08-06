"use client";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'

const Update = () => {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`)
            .then(res => res.json())
            .then(result => {
                setTitle(result.title);
                setMessage(result.message);
            });
    }, [id]);


    return (
        <>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                // const title = evt.target.title.value;
                // const message = evt.target.message.value;
                const options = { //전송할 방식, 전송할 데이터
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, message })
                }
                fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, options)
                    .then(res => res.json())
                    .then(result => {
                        router.push(`/read/${result.id}`);
                        router.refresh();
                        console.log(result)
                    });
            }}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="title" value={title} onChange={(evt) => {
                        setTitle(evt.target.value);
                    }} placeholder="title" />
                </div>

                <div className="mb-3">
                    <textarea className="form-control" name="message" value={message} onChange={(evt) => {
                        setMessage(evt.target.value);
                    }} rows="3"></textarea>
                </div>

                <p>
                    <button type="submit" className="btn btn-success">전송</button>
                </p>
            </form>
        </>
    )
}

export default Update