import { useCalendarContext } from '../../contexts/CalendarContext';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';

export const Searchappointment = () => {
    const {
        setIsCalendarOpen,
        isCalendarOpen,
        setStartDate,
        startDate,
        navigate,
    } = useCalendarContext();

    const handleCancel = () => {
        navigate(-1);
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        setIsCalendarOpen(false);
    };

    const toggleCalendar = () => {
        setIsCalendarOpen((prev) => !prev);
    };

    return (
        <div className="bg-primary-bg border border-primary-border p-4">
            <div className=" bg-white shadow-lg">
                <div className="inset-shadow-[0px_0px_4px] shadow inset-shadow-gray-400 px-5 py-3">
                    <p className="font-bold text-lg">Create Patient Profile</p>
                </div>

                <div className="p-6 flex flex-col h-full">
                    <div className="grid grid-cols-3 gap-6">
                        <label className="block text-md font-semibold text-gray-700 mb-1">
                            Last Name
                        </label>

                        <label className="block text-md font-semibold text-gray-700 mb-1">
                            First Name
                        </label>

                        <label className="block text-md font-semibold text-gray-700 mb-1">
                            Date
                        </label>
                    </div>

                    <div className="relative w-full grid grid-cols-3 gap-6">
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter Last Name"
                            className="w-full h-9 border rounded pl-3 shadow-md focus:outline-none placeholder:text-sm"
                        />
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter First Name"
                            className="w-full h-9 border rounded pl-3 shadow-md focus:outline-none placeholder:text-sm"
                        />

                        <div className="relative">
                            <DatePicker
                                className="w-full"
                                selected={startDate}
                                onChange={handleDateChange}
                                open={isCalendarOpen}
                                onClickOutside={() => setIsCalendarOpen(false)}
                                customInput={
                                    <div>
                                        <input
                                            placeholder="MM/DD/YYYY"
                                            type="text"
                                            className="date-input border rounded p-2 pl-3 shadow-md focus:outline-none text-sm"
                                            value={
                                                startDate
                                                    ? startDate.toLocaleDateString()
                                                    : ''
                                            }
                                            onFocus={() =>
                                                setIsCalendarOpen(true)
                                            }
                                            readOnly
                                        />
                                        <span
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                            onClick={toggleCalendar}
                                        >
                                            <FaCalendarAlt />
                                        </span>
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    <div className="flex grid-cols-2 gap-4 justify-center items-center mt-24">
                        <button
                            onClick={handleCancel}
                            className="flex justify-center items-center w-30 h-10 border-2 border-[#0090FF] text-[14px] text-[#0090FF] font-bold rounded-lg shadow-lg cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="flex justify-center items-center w-30 h-10 border border-[#0090FF] bg-[#0090FF] text-[14px] text-white font-bold rounded-lg cursor-pointer"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
