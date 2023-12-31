import React from 'react';

const AskForAppointment = () => {
    return (
        <div class="bg-gray-100 py-20 p-4 md:p-20 lg:p-32 border-2 flex justify-center ">

            <div class=" bg-white rounded-lg overflow-hidden shadow-lg shadow-blue-200 ">
                <div class="p-10">
                    <h2 class="text-2xl font-bold text-gray-800 mb-5 mt-5">Ask For Appointment</h2>
                    <form>
                        {/*  */}
                        <div class="flex">
                            <div class="mb-4">

                                <label class="block text-gray-700 font-bold mb-2" for="username">
                                    Date
                                </label>
                                <input class="shadow appearance-none border rounded w-40 mr-[90px] py-2 px-3
                                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="date" type="text" placeholder="Date" />

                            </div>

                            <div class="mb-4">

                                <label class="block text-gray-700 font-bold mb-2" for="username">
                                    Time
                                </label>
                                <input class="shadow appearance-none border rounded w-40 py-2 px-3
                                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="date" type="text" placeholder="time" />

                            </div>

                        </div>

                        {/*  */}
                        <div class="mb-6">
                            <label class="block text-gray-700 font-bold mb-2" for="password">
                                Doctor
                            </label>
                            <input class="shadow appearance-none border rounded w-1/2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="doctor's name" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 font-bold mb-2 " for="password">
                                Clinic/Hospital
                            </label>
                            <input class=" w-2/3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="clinic/hospital name" />
                        </div>

                        {/* Prebooking */}
                        <div class="flex">
                            <div class="mb-4 mr-32">

                                <label class="block text-gray-700 font-bold mb-2" for="username">
                                    Pre-booking fee
                                </label>
                                <select class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" name="amount">
                                    <option value="500">500 taka</option>
                                    <option value="1000">1000 taka</option>
                                    <option value="1500">1500 taka</option>
                                </select>


                            </div>

                            <div class="mb-4">

                                <label class="block text-gray-700 font-bold mb-2" for="username">
                                    Payment Method
                                </label>
                                <input class="shadow appearance-none border rounded w-40 py-2 px-3
                                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="date" type="text" placeholder="payment method" />

                            </div>

                        </div>


                        <div class="flex gap-8 mt-2">

                            <button class="inline-block px-12 py-3 text-sm font-bold text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring" href="/download">
                                Ask
                            </button>

                            <button class="inline-block px-12 py-3 text-sm font-bold text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                                Cancel
                            </button>

                        </div>
                    </form>
                </div>
            </div>


            <img
                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
                alt="Designer Life Image"
                style={{
                    margin: '12px',
                    maxWidth: '35%',
                }}
            />

        </div>
    );
};

export default AskForAppointment;