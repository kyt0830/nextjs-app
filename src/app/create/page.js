"use client";
import { useRouter } from 'next/navigation'

const Create = () => {
    const router = useRouter();
    return (
        <>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                const title = evt.target.title.value;
                const message = evt.target.message.value;
                const options = { //전송할 방식, 전송할 데이터
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, message })
                }
                fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/`, options)//fetch에서 두번째 인자를 사용하면 값을 추가하는 문이다.
                    .then(res => res.json())
                    .then(result => {
                        router.push(`/read/${result.id}`);
                        router.refresh();
                        console.log(result)
                    });
            }}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="title" placeholder="title" />
                </div>

                <div className="mb-3">
                    <textarea className="form-control" name="message" rows="3"></textarea>
                </div>

                <p>
                    <button type="submit" className="btn btn-success">전송</button>
                </p>
            </form>
        </>
    )
}

export default Create