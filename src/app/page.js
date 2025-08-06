import Image from 'next/image'

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <p>Hello Web!</p>
      <Image
        src="/home.png"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </>
  );
}

export default Home