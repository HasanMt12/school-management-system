

const StudentsForm = () => {
    return (
         <div className="w-full">
                <div className="text-center">
                    <h1 className="text-2xl font-medium text-[#333333]">Student Sign in</h1>
                    <p className="mt-2 text-[#5588a9]">Sign in Innovation Institute</p>
                </div>
                <div className="mt-5 pb-2">

                    <form>

                        <div className="relative mt-6">

                            <input 
                        
                            type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                        
                            <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                        </div>

                        <div className="relative mt-6">

                            <input 
                            
                            type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                            <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                        </div>

                        <div className="my-6">
                        <button type="submit" className="w-full rounded-md bg-[#457B9D] px-3 py-4 text-white focus:bg-[#8b9fb4] focus:outline-none">Sign in</button>
                        </div>
                    
                    </form>
                </div>
            </div>
    );
};

export default StudentsForm;