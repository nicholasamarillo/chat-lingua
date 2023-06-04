import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='min-h-screen min-w-screen bg-gradient-to-b from-amber-200 to to-white'>
      <nav className='text-end max-h-1 p-5'>
        <h4 className='text-md font-Geologica'>About</h4>
      </nav>
      <div className='text-center p-20'>
        <h1 className='text-5xl text-blue-900 font-Geologica'>Welcome to Chat Lingua</h1>
        <h3 className='text-xl py-5 text-blue-300 font-Geologica max-w-sm mx-auto'>Practice your conversational skills in other languages with your natural language AI partner</h3>
      </div>
      <div className='text-center font-Geologica py-10 text-xl text-blue-900'>What language are you studying?</div>
      <div className='flex justify-evenly mx-3'>
        <div className='flex justify-center items-center font-Geologica h-14 w-20 rounded-lg bg-white hover:bg-orange-200'>ENG</div>
        <div className='flex justify-center items-center font-Geologica h-14 w-20 rounded-lg bg-white hover:bg-red-200'>SPN</div>
        <div className='flex justify-center items-center font-Geologica h-14 w-20 rounded-lg bg-white hover:bg-blue-200'>FRN</div>
        <div className='flex justify-center items-center font-Geologica h-14 w-20 rounded-lg bg-white hover:bg-yellow-200'>ITL</div>
        <div className='flex justify-center items-center font-Geologica h-14 w-20 rounded-lg bg-white hover:bg-green-200'>GRM</div>
      </div>
      <div>

      </div>
      </section>
    </main>
  )
}
