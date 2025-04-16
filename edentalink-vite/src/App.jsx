import { CalendarProvider } from './contexts/CalendarContext.jsx';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import { PageNotFound } from './PageNotFound';
import { Login } from './Login.jsx';
import {
    Searchappointment,
    CalendarIndex,
    PatientFinder,
    CreateProfile,
    Container,
    Dashboard,
} from './modules/Index';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login />} />

            <Route element={<Container />}>
                <Route
                    path="/calendar"
                    element={
                        <CalendarProvider>
                            <Outlet />
                        </CalendarProvider>
                    }
                >
                    <Route index element={<CalendarIndex />} />
                    <Route
                        path="create-patient-profile"
                        element={<CreateProfile />}
                    />
                    <Route
                        path="search-appointment"
                        element={<Searchappointment />}
                    />
                </Route>

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patient-finder" element={<PatientFinder />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default App;
