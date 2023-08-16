import React from 'react'
import {FaLinkedinIn, FaFile, FaGithub, FaGitlab} from 'react-icons/fa'

//style={{color: "#333"}}
const MyLinks = ({githubColor}) => {
    return (
        <div className='flex justify-around pt-6 max-w-[200px] w-full'>
            <a className='hover:scale-110 ease-in duration-300' href="https://www.linkedin.com/in/christiantegene" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className='cursor-pointer' style={{color: "#0077b5"}} size={25}/>
            </a>
            <a className='hover:scale-110 ease-in duration-300' href="https://gitlab.com/christiantegene" target="_blank" rel="noopener noreferrer">
                <FaGitlab className='cursor-pointer' style={{color: "#fc6d26"}} size={25}/>
            </a>
            <a className='hover:scale-110 ease-in duration-300' href="https://github.com/christiantegene" target="_blank" rel="noopener noreferrer">
                <FaGithub className='cursor-pointer' style={{color: githubColor}} size={25}/>
            </a>
            <a className='hover:scale-110 ease-in duration-300' href="https://s3.amazonaws.com/attachments.angel.co/8732376-315f2da32867e15d25c4e5cf9057c217.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATAVHNKYQWRN6ZQPK%2F20230816%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230816T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVhTBWbi5%2FJqd9RzGkgeNeqVCsp3ENy6e0nBRoIt8KwQIgS%2Bi6yoBFFTEvAqWELNrxgtSz4FXr71n57JaLpg0yqJ4qigUIYBAAGgwyMDc1ODMyNzA0MzMiDEh1qSU0K8GVMLVibSrnBI8kY45hFoSMF3Q8JjPPraMBebFE8uurhHr%2B7if2o%2Fp4OtbNNEkzQihBUacZPOdMxQ%2BdoTPRmd0R0paxL23lATSBtflNo3nX3o%2F7%2F2FrXDVul7nvitlFlGARuEegyjjGZZhlz2l8yKKCHzxpxUQCPrpZZ16VQhR13YBbYmCB%2B%2B9DoDBriIo4V4IOZ%2BnokVxSW4TqxHJKW%2FJ7%2F4UGYNby%2FKrnLV1CTsUgU%2BYQ2cL5TpGG0prq8KrpFYEkFYYXpYrmeC0me75%2FmG%2BceJdZE4GYo1N0Iw%2FY1xUMmLTh%2F1miYsVnQKCZy2URFlk6dkAHmqIo8ps5iD3f9nrMLX98RJKUEraliQGpuan92smWn85%2BPf%2FobjYbQCbolj83Uzuy9ZMbo6F9STmmG9exoAaBSsmGIaHSUYSitUM8TQLfmcMmyK%2FoEFyeLTamfIhEjS9gLl297z7C2l%2FG%2Fl9eLfEyurW51ZRIzXWxsunCdvT925LBjDGSrIvsJ%2FVxqf9QU5P5URywuseuef47CAB%2F%2Bj2pr5xc8k4ezmxqfO%2BYAhMryL0XGmlC7ZN4vZz4JWPqMTv1e2WNu9xo%2BTTUlx08s5dXF61X6lKoCY9k1LlPyH56IS8iFRufjDT9xY7rFoq5aBFTXQdjeyE%2BW8cdmVvU5tXFsG5YGNNOZ0x4DdHjHCb5VmxMU8OQsrD3RuO1ktb71QaxiUNfAQulfxfTZnqjyOkjBkXPtlKblJixqBjdbh84BD2otBueztIEKllLYlMJ123Fx4HAsdfQ3TqqZHB%2Bz1qHz%2BF4yPUL%2BFMfgutN5kWjA5h0BJ3MVFa%2F7D7eiDDOvvOmBjqaAVqU7C0DR5mdPIM%2Fmx8fLPnAdy0cXRdzdtE8tT6jVDzyGRHkAlqLaojCTMk%2Biv20p%2BbgOwxKeCQjYx7h7Q4chxqJjPMGnhk0zjtAMB7qyg71YLzpEu2Tm3xOz6s2Lh1ixlWXnBrPcknO2kvEvIoaEuwScLfWb1Jnm1N%2FZPco4b1cijVFtqs9Vd5T4RqHdt0wfTsQRPwGxdojzMo%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=cf63b97f13b6fe85e6ae0c8bacc0439c18e565052a532913ab1bb481b593da63" target="_blank" rel="noopener noreferrer">
                <FaFile className='cursor-pointer' style={{color: "#92B558"}} size={22}/>
            </a>
        </div>
    )
}

export default MyLinks
