import { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const CalendarContext = createContext();

export const useCalendarContext = () => {
    return useContext(CalendarContext);
};

export const CalendarProvider = ({ children }) => {
    const initForm = {
        lastName: '',
        firstName: '',
        middleName: '',
        payor: '',
        cardName: '',
        dateBirth: null,
        gender: null,
        maritalStatus: '',
        mobileNumber: '',
        emailAddress: '',
        date: null,
    };

    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState(initForm);
    const [startDate, setStartDate] = useState(null);
    const [status, setStatus] = useState('');
    const [payor, setPayor] = useState('');
    const navigate = useNavigate();

    const data = {
        setSelectedPatient,
        setIsCalendarOpen,
        setSelectedDate,
        setStartDate,
        setFormData,
        setStatus,
        setPayor,
        navigate,

        isCalendarOpen,
        selectedPatient,
        selectedDate,
        startDate,
        formData,
        status,
        payor,
    };

    const memoData = useMemo(
        () => data,
        [
            selectedPatient,
            isCalendarOpen,
            selectedDate,
            startDate,
            formData,
            status,
            payor,
        ]
    );

    return (
        <CalendarContext.Provider value={memoData}>
            {children}
        </CalendarContext.Provider>
    );
};

CalendarProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
