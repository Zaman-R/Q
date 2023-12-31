import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
const AppointmentDetails = () => {
    const [appointmentDetails, setAppointmentDetails] = useState([
        { id: 1, isChecked: false, name: 'John Doe' },
        { id: 2, isChecked: false, name: 'Jane Smith' },
        // Add more appointment details as needed
    ]);


    // const history = useHistory();
    const handleCheckboxChange = (id) => {
        setAppointmentDetails((prevDetails) =>
            prevDetails.map((detail) =>
                detail.id === id ? { ...detail, isChecked: !detail.isChecked } : detail
            )
        );
    };

    // const handleNameClick = (id) => {
    //     history.push(`/details/${id}`);
    //   };

    return (
        <div className="w-full ml-52">
            <h1 className="text-2xl font-extrabold ml-10 mt-10">Appointment Details</h1>

            <div className="overflow-x-auto m-10 w-3/4 border-t border-l border-r border-gray-200 shadow-lg">
                <table className="table table-zebra text-center">
                    {/* table head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Present</th>
                        </tr>
                    </thead>
                    {/* table body */}
                    <tbody>
                        {appointmentDetails.map((appointmentDetail) => (
                            <tr key={appointmentDetail.id}>
                                <td className="cursor-pointer"
                                 onClick={() => handleNameClick(appointmentDetail.id)}
                                 >{appointmentDetail.name}</td>
                                <td className="flex justify-center">
                                    <div className="flex items-center me-4">
                                        <input
                                            checked={appointmentDetail.isChecked}
                                            id={`green-checkbox-${appointmentDetail.id}`}
                                            type="checkbox"
                                            onChange={() => handleCheckboxChange(appointmentDetail.id)}
                                            className="w-4 h-4 rounded"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentDetails;
