import { useCalendarContext } from '../../contexts/CalendarContext';
import { appointments } from '../shared/utils/constants';
import Calendar from 'react-calendar';
import { useState } from 'react';
import dayjs from 'dayjs';
import {
    MagnifyingGlassIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    Bars3Icon,
    PlusIcon,
} from '@heroicons/react/24/solid';

export const Calandar = ({ addTab }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { setSelectedPatient, navigate } = useCalendarContext();

    const handleNextSearchAppointment = () => {
        navigate('search-appointment');
    };

    const handleNextCreateNewProfile = () => {
        navigate('create-patient-profile');
    };

    const tileClassName = ({ date, view, activeStartDate }) => {
        if (view === 'month') {
            const currentMonth = activeStartDate.getMonth();
            let defaultStyle = 'text-sm font-semibold text-gray-400';

            if (date.toDateString() === selectedDate?.toDateString()) {
                return `${defaultStyle} text-black font-semibold`;
            }

            if (date.toDateString() === new Date().toDateString()) {
                return `${defaultStyle} text-black`;
            }

            if (date.getMonth() === currentMonth) {
                return `${defaultStyle} text-gray-500`;
            }

            return defaultStyle;
        }
    };

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-3 md:flex-row p-1">
                <div className="p-1 flex flex-col gap-3">
                    <div className="flex gap-x-2">
                        <button className="cursor-pointer p-2 rounded shadow-lg border border-primary hover:bg-primary/80 group">
                            <Bars3Icon className="size-5 text-primary stroke-2 stroke-primary group-hover:stroke-white" />
                        </button>

                        <button
                            onClick={handleNextCreateNewProfile}
                            className="cursor-pointer p-2 rounded shadow-lg bg-primary hover:bg-primary/60 active:bg-primary"
                        >
                            <PlusIcon className="size-5 text-primary stroke-white stroke-2" />
                        </button>

                        <button
                            onClick={handleNextSearchAppointment}
                            className="cursor-pointer p-2 rounded shadow-lg bg-primary hover:bg-primary/60 active:bg-primary"
                        >
                            <MagnifyingGlassIcon className="size-5 text-primary stroke-white stroke-2" />
                        </button>
                    </div>

                    <Calendar
                        value={selectedDate}
                        onChange={(dt) => {
                            if (dt instanceof Date) {
                                setSelectedDate(dt);
                            } else if (
                                Array.isArray(dt) &&
                                dt[0] instanceof Date
                            ) {
                                setSelectedDate(dt[0]);
                            } else {
                                setSelectedDate(null);
                            }
                        }}
                        calendarType="gregory"
                        className="shadow-lg bg-white h-full max-h-[380px]"
                        formatShortWeekday={(_, date) =>
                            dayjs(date).format('dd')[0]
                        }
                        tileClassName={tileClassName}
                        minDetail="decade"
                    />
                </div>

                <div className="p-1 flex flex-col gap-3 w-full">
                    <div className="flex gap-x-4 items-center">
                        <button className="p-2 rounded hover:bg-blue-100 cursor-pointer">
                            <ChevronLeftIcon className="size-5 stroke-2 stroke-blue-700" />
                        </button>
                        <p className="tracking-wider text-center text-gray-700">
                            {dayjs(selectedDate)
                                .format('dddd, MMMM D, YYYY')
                                .toUpperCase()}
                        </p>
                        <button className="p-2 rounded hover:bg-blue-100 cursor-pointer">
                            <ChevronRightIcon className="size-5 stroke-2 stroke-blue-700" />
                        </button>
                    </div>
                    <div className="p-5 w-full h-full bg-white shadow-lg flex flex-col gap-y-3">
                        {appointments.map((constants, index) => (
                            <div
                                className="border border-primary rounded-xl p-2 text-left uppercase text-sm hover:bg-gray-200/70 cursor-pointer"
                                key={index}
                                onClick={() => {
                                    setSelectedPatient(constants);
                                    addTab('patient-record');
                                }}
                            >
                                <p className="pl-2 font-bold underline">
                                    {constants.lastName}
                                    {', '}
                                    {constants.firstName} {constants.middleName}
                                    {'. '}
                                </p>
                                <p className="pl-2">{constants.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
