
const Hero = () => {
  return (
  <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-4'>
      <h1 className=' text-2xl font-extrabold purple_gradient'>SmartSum</h1>
      <button type='button' onClick={
        () => window.open('https://github.com/Yhucee14')
      } className='black_btn'>Github</button>
    </nav>

    <h1 className='head_text'>
      Summarize Articles using <br className="max-md:hidden"/>
      <span className='purple_gradient'>OpenAi GPT-4</span>
    </h1>
    <h1 className="desc">
      Simplify your reading with <b>SmartSum</b>, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
    </h1>
  </header>
  )
}

export default Hero