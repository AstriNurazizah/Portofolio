import { blogdata } from './blogdata';

export default function BlogAll() {
  return (
    <>
    <div>
      <h2 className="font-bold text-4xl text-center px-8 py-8">All Blog</h2>
      {/* <input type="text" placeholder="Search..." className="border p-2"/> */}
    </div>
    <div className='grid grid-cols-2 gap-4 p-5'>
            {blogdata.map((blog) => (
                <div key={blog.id} className="bg-neutral-100 flex items-center space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 mb-12">
                <div className="w-1/2 items-center ssm:w-fit">
                    <img src={blog.imgblog} alt="" width={300} height={200} className="" />
                </div>
                <div className="lg:w-1/2 ssm:w-fit">
                    <h1 className="text-3xl">{blog.nama}</h1>
                </div>
                </div>
            ))}
        </div>
    </>
  )
}

