import { useCalendarContext } from '../../contexts/CalendarContext';
import { DatePicker } from '@mui/x-date-pickers';

export const CreateProfile = () => {
    const {
        setSelectedDate,
        selectedDate,
        setStatus,
        navigate,
        setPayor,
        payor,
    } = useCalendarContext();

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className="bg-primary-bg border border-primary-border p-4">
                <div className="bg-white shadow-lg">
                    <div className="inset-shadow-[0px_0px_4px] shadow inset-shadow-gray-400 px-5 py-3">
                        <p className="font-bold text-lg">
                            Create Patient Profile
                        </p>
                    </div>

                    <div className="shadow-lg p-5 flex flex-col gap-y-2">
                        <div className="grid grid-cols-4 gap-4">
                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                Last Name
                            </label>

                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                First Name
                            </label>

                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                Middle Name
                            </label>

                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                Suffix
                            </label>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Enter Last Name"
                                className="w-full h-9 border rounded p-2 pl-4 shadow-md focus:outline-none placeholder:text-sm"
                            />

                            <input
                                id="firstName"
                                type="text"
                                placeholder="Enter First Name"
                                className="w-full h-9 border rounded p-2 pl-4 shadow-md focus:outline-none placeholder:text-sm"
                            />

                            <input
                                id="middleName"
                                type="text"
                                placeholder="Enter Middle Name"
                                className="w-full h-9 border rounded p-2 pl-4 shadow-md focus:outline-none placeholder:text-sm"
                            />

                            <input
                                id="suffix"
                                type="text"
                                placeholder="Enter Suffix"
                                className="w-full h-9 border rounded p-2 pl-4 shadow-md focus:outline-none placeholder:text-sm"
                            />
                        </div>

                        <div className="grid grid-cols-4 gap-4 mt-6">
                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                Payor
                            </label>

                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                Card Name
                            </label>

                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                Date of Birth
                            </label>

                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                Gender
                            </label>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            <select
                                onChange={(e) => setPayor(e.target.value)}
                                name="payor"
                                id="payor"
                                defaultValue=""
                                className="w-full h-9 px-2 py-1 border rounded-md shadow-md"
                            >
                                <option value="" disabled></option>
                                <option value="walkIn">Walk-in</option>
                                <option value="card">Card</option>
                            </select>

                            <input
                                disabled={payor === 'walkIn'}
                                type="text"
                                id="cardnumber"
                                name="cardnumber"
                                placeholder={
                                    payor === 'walkIn'
                                        ? ''
                                        : 'Enter Card Number'
                                }
                                inputMode="numeric"
                                className={`w-full h-9 px-2 py-1 border rounded-md shadow-md placeholder:text-sm 
                                              ${payor === 'walkIn' ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white'}
                                          `}
                            />

                            <DatePicker
                                value={selectedDate}
                                onChange={setSelectedDate}
                                format="MM/DD/YYYY"
                                slotProps={{
                                    textField: {
                                        sx: {
                                            '& .MuiInputBase-root': {
                                                height: '36px',
                                                fontSize: '14px',
                                                border: 1,
                                            },
                                            '& .MuiOutlinedInput-input': {
                                                padding: '0 12px',
                                            },
                                        },
                                    },
                                }}
                            />

                            <div className="flex items-center gap-4">
                                <input
                                    type="radio"
                                    id="male"
                                    value="male"
                                    name="gender"
                                    className="w-4 h-4"
                                />

                                <label
                                    htmlFor="male"
                                    className="mr-12 text-[18px]"
                                >
                                    Male
                                </label>

                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    className="w-4 h-4 "
                                />

                                <label htmlFor="female" className="text-[18px]">
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 mt-6">
                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                Marital Status
                            </label>
                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                Mobile Number
                            </label>
                            <label className="block text-md font-semibold text-gray-700 mb-1">
                                Email
                            </label>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            <select
                                className="w-full h-9 border rounded-sm"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="" disabled>
                                    Select Status
                                </option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </select>

                            <input
                                type="text"
                                id="mobileNumber"
                                name="mobileNumber"
                                placeholder="Enter Mobile Number"
                                className="w-full h-9 border rounded p-2 pl-4 shadow-md focus:outline-none placeholder:text-sm"
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                className="w-full h-9 border rounded p-2 pl-4 shadow-md focus:outline-none placeholder:text-sm"
                            ></input>
                        </div>
                        <div className="flex grid-cols-2 gap-4 justify-center items-center mt-14">
                            <button
                                onClick={handleCancel}
                                className="w-30 h-10 border-2 border-[#0090FF] text-[14px] text-[#0090FF] font-bold rounded-lg shadow-lg cursor-pointer"
                            >
                                Cancel
                            </button>

                            <button className="w-30 h-10 border border-[#0090FF] bg-[#0090FF] text-[14px] text-white font-bold rounded-lg cursor-pointer">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
