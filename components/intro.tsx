import Image from 'next/image'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex md:items-center md:justify-between">
      <div className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Hekar's Log
        </h1>
        <h4 className="md:text-left text-xl mt-2 md:pl-2">
          Mov patterns masquerading as complex systems
        </h4>
      </div>
      <div className="text-right pr-4 md:pr-8">
        <a href="https://github.com/hekar">
          <Image src="/GitHub-Mark-32px.png" layout="fixed" width={32} height={32} />
        </a>
      </div>
    </section>
  );
};

export default Intro;
