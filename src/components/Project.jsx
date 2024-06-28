const Project = ({img, title, tagline, repo, link}) => {
    if (link) {
        return (
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-t from-indigo-500 to-blue-500'>
                <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
                <div className='hidden group-hover:flex absolute inset-0 items-center justify-center flex-col'>
                    <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                        {title}
                    </h3>
                    <p className='text-xs sm:text-lg sm:pb-4 sm:pt-2 text-white text-center'>
                        {tagline}
                    </p>
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        <p className='w-[200px] text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer tect-lg'>Repo</p>
                    </a>
                    <a className='p-1' href={link} target="_blank" rel="noopener noreferrer" >
                        <p className='w-[200px] text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer tect-lg'>Link</p>
                    </a>
                </div>
            </div>
        )
    }
    else { //className='hidden group-hover:flex absolute inset-0 items-center justify-center flex-col'
        return (
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-t from-indigo-500 to-blue-500'>
                <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                        {title}
                    </h3>
                    <p className='pb-4 pt-2 text-white text-center'>
                        {tagline}
                    </p>
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer tect-lg'>Repo</p>
                    </a>
                </div>
            </div>
        )
    }

}

export default Project
