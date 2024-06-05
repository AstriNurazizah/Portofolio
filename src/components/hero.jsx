import HeroPic from "../assets/Rectangle 1.png";


export default function Hero() {
  return (
    <section className="flex  items-center p-10 space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10 mb-10">
        <div className="lg:w-1/2 ssm:w-fit">
          <p className="text-5xl mb-4">👋</p>
          <p className="text-2xl mb-5">Hi, I’m Astri Nurazizah </p>
          <h1 className="text-5xl">Designing Enterprise Solutions.</h1>
          <hr/>
          <p>
          Designer and developer: I wear many hats.
          </p>
        </div>
        <div className="flex justify-end">
        <div className="w-1/2 items-center ssm:w-fit">
            <img src={HeroPic} alt="" width={700} height={320}
                className="rounded-full"
            />
        </div>
        </div>
    </section>
  )
}
