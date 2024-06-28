import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import { blogdata } from './blogdata';

export default function Blog() {
  return (
    <>
        <div id="blog" className="flex p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 items-center w-full ">
            <div className="lg:w-1/2 w-full flex lg:justify-start justify-center lg:items-center ">
            <h1 className="text-5xl">From my blog</h1>
            </div>
            <div className="lg:w-1/2 ssm:w-fit flex justify-end">
                <button className='flex items-center border border-black text-black px-8 py-3 '>
                <Link to="/blogall" className="flex items-center">
                    View All
                    <MdArrowOutward/>
                </Link>
                </button>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-4 p-5'>
            {blogdata.slice(0, 4).map((blog) => (
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

