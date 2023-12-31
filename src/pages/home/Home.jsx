
const Home = () => {
    return (
        <div>


            {/* <a href="https://ibb.co/pXY8S8M"><img src="https://i.ibb.co/ysH1r1Z/Login.jpg" alt="Login" border="0"></a> */}
            {/* Hero section */}
            <section >
                <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div class="container mx-auto px-6 flex relative py-16  max-h-screen">
                        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 ">
                            <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                            </span>
                            <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                <span class="text-4xl sm:text-7xl">
                                    Find your doctor and make your appointment
                                </span>
                            </h1>
                            <p class="text-sm sm:text-lg text-gray-500 dark:text-white mt-2 font-bold">
                                Revolutionizing doctor appointments, one
                                seamless queue at a time.                    </p>
                            <div class="flex mt-8">
                                <button class="inline-block px-12 py-3 text-xl font-bold text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring" href="/download">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                            <img src="https://i.ibb.co/3MwxkHt/Hero-img.jpg" class="mx-auto " />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features*/}
            <section class="bg-gray-200 py-20">
                <div class="container mx-auto px-4">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Effortless appointment</h2>
                        <h2 className="mb-4 text-4xl  leading-2 tracking-tight font-extrabold text-gray-900 dark:text-white">management</h2>
                        <p class="text-gray-600 mb-12">Our Advanced Features Redefine Healthcare Scheduling!</p>
                    </div>
                    <div class="flex flex-wrap -mx-4 mt-12 ">
                        <div class="w-full md:w-1/3 px-4 mb-8 ">
                            <div class="rounded-md bg-white shadow-md p-8  text-center">
                                <h3 class="text-2xl font-bold mb-4">Real-Time Queue Updates</h3>
                                <p class="text-gray-600 mb-4">Instantly monitor and display live updates of doctor appointment queues, ensuring real-time visibility and accurate wait times.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="rounded-md bg-white shadow-md p-8 text-center">
                                <h3 class="text-2xl font-bold mb-4 text-center">Customizable Appointment Slots</h3>
                                <p class="text-gray-600 mb-4">Tailor appointment schedules to specific needs, allowing flexible customization for patients and healthcare providers.</p>
                            </div>
                        </div>

                        <div class="w-full md:w-1/3 px-4 mb-8">
                            <div class="rounded-md bg-white shadow-md p-8  text-center">
                                <h3 class="text-2xl font-bold mb-4 ">Queue Monitoring Tools</h3>
                                <p class="text-gray-600 mb-4">Empower administrators with comprehensive queue monitoring tools for real-time oversight and efficient management of patient queues</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Reviews */}
            <div class="text-gray-600 dark:text-gray-300 mt-8" id="reviews">

                <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">

                    <div class="mb-10 space-y-4 px-6 md:px-0">
                        <h2 class="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                            What do our clients say?
                        </h2>
                    </div>


                    <div class="md:columns-2 lg:columns-3 gap-8 space-y-8">


                        <div
                            class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div class="flex gap-4">
                                <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                                <div>
                                    <h6 class="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h6>
                                    <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                                </div>
                            </div>
                            <p class="mt-8 ">QMedic's real-time updates, customizable slots, and queue monitoring tools optimized our clinic's workflow, enhancing patient care.
                            </p>
                        </div>


                        <div
                            class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div class="flex gap-4">
                                <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200" height="200" loading="lazy" />
                                <div>
                                    <h6 class="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
                                    <p class="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
                                </div>
                            </div>
                            <p class="mt-8"> With QMedic, our hospital streamlined appointments, reduced wait times, and gained valuable insights for efficient scheduling </p>
                        </div>

                        <div
                            class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                            <div class="flex gap-4">
                                <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400" height="400" loading="lazy" />
                                <div>
                                    <h6 class="text-lg font-medium text-gray-700 dark:text-white">Yanndy Doe</h6>
                                    <p class="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                                </div>
                            </div>
                            <p class="mt-8">QMedic's real-time updates and customizable slots transformed our practice, empowering our team and improving patient experiences
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Extra Section */}
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 mx-auto mt-40">

                <h2 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-600">
                    <span class="text-2xl sm:text-2xl mx-auto mb-4">
                        Switching to QMedic?
                    </span>
                </h2>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    <span class="text-4xl sm:text-5xl mx-auto mb-4 text-center ">
                        Organize appointments effortlessly, anywhere, with QMedic.
                    </span>
                </h1>

                <div class="flex mt-8 mx-auto">
                    <button class="inline-block px-12 py-3 text-xl font-bold text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring" href="/download">
                        Sign Up
                    </button>
                </div>
            </div>


            {/* Footer */}
            <footer className="footer footer-center p-10 bg-blue-600 text-primary-content mt-40">
                <aside>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p className="font-bold">
                        Q Medic. <br />Providing reliable healthcare since 1992
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div >
    );
};

export default Home;