import React, { useState } from 'react';


const AppointmentList = () => {
    const appointmentList = [
        {
            appointment_id: 1,
            date: "29 Dec, 2023",
            time: "05:00 PM",
            patients: 2,
        },
        {
            appointment_id: 2,
            date: "29 Dec, 2023",
            time: "06:15 PM",
            patients: 5,
        },
        {
            appointment_id: 3,
            date: "29 Dec, 2023",
            time: "06:15 PM",
            patients: 6,
        },
        {
            appointment_id: 4,
            date: "30 Dec, 2023",
            time: "06:15 PM",
            patients: 6,
        },
        {
            appointment_id: 5,
            date: "31 Dec, 2023",
            time: "06:15 PM",
            patients: 6,
        },
    ]

    const isToday = (date) => {
        const today = new Date();
        const dateToCheck = new Date(date);
        return today.toDateString() === dateToCheck.toDateString();
    };

    const [sortConfig, setSortConfig] = useState({
        key: 'date',
        direction: 'asc',
    });



    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedAppointments = [...appointmentList].sort((a, b) => {
        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];

        const comparison = valueA.localeCompare(valueB, undefined, { numeric: true });

        return sortConfig.direction === 'desc' ? comparison * -1 : comparison;
    });

    return (
        <div className="flex justify-center">
            <div className="w-full ml-52">
                <h1 className="text-2xl font-extrabold ml-10 mt-10">Appointments</h1>

                <div className="overflow-x-auto m-10 w-3/4 border-t border-l border-r border-gray-200 shadow-lg">
                    <table className="table table-zebra text-center">
                        {/* table head */}
                        <thead>
                            <tr>
                                <th onClick={() => handleSort('date')} className="cursor-pointer">
                                    Date {sortConfig.key === 'date' && (sortConfig.direction === 'asc' ? <>&#9650;</> : <>&#9660;</>)}
                                </th>
                                <th onClick={() => handleSort('time')} className="cursor-pointer">
                                    Time {sortConfig.key === 'time' && (sortConfig.direction === 'asc' ? <>&#9650;</> : <>&#9660;</>)}
                                </th>
                                <th> Patients </th>
                                <th> Status </th>
                            </tr>
                        </thead>
                        {/* table body */}
                        <tbody>
                            {sortedAppointments.map((appointment, index) => (
                                <tr key={appointment.appointment_id}>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>
                                        <button className="inline-block px-4 py-2 text-sm font-bold text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white active:bg-blue-500 focus:outline-none focus:ring">
                                            {appointment.patients}
                                        </button>
                                    </td>
                                    <td>
                                        {isToday(appointment.date) ? (
                                            <span className="py-2 px-4 border-none rounded bg-green-500 text-sm text-white font-bold">Today</span>
                                        ) : (
                                            <span className="py-2 px-4 border-none rounded bg-cyan-400 text-sm text-white font-bold">Upcoming</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppointmentList;