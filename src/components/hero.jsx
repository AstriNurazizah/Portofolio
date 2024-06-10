import HeroPic from "../assets/Rectangle 1.png";


export default function Hero() {
  return (
    <section className="flex  items-center p-10 space-x-10 
    lg:flex-row ssm:flex-col ssm:space-y-10 mb-10" id="home">
        <div className="lg:w-1/2 ssm:w-fit">
          <p className="text-5xl mb-4">👋</p>
          <p className="text-2xl mb-5">Hi, I’m Astri Nurazizah </p>
          <h1 className="text-5xl">Creating with Code and Design</h1>
          {/* Berkarya dengan Kode dan Desain */}
          <hr/>
          <p>
          Raduated in Informatics Engineering, I am dedicated to crafting visually appealing and functional software. 
          My journey is driven by a love for both design and technology.
          {/* Lulusan Teknik Informatika, saya berdedikasi untuk merancang perangkat lunak yang menarik secara visual dan fungsional. 
          Perjalanan saya didorong oleh kecintaan pada desain dan teknologi. */}
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
