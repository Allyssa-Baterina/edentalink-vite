import { appointments } from '/src/modules/shared/utils/constants.js';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
export const PatientFinder = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPatients, setFilteredPatients] = useState(appointments);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        if (!query) {
            setFilteredPatients(appointments);
            return;
        }

        const filtered = appointments.filter((patient) => {
            const fullName =
                `${patient.firstName} ${patient.middleName} ${patient.lastName}`.toLowerCase();
            return (
                fullName.includes(query) ||
                patient.procedure.toLowerCase().includes(query)
            );
        });

        setFilteredPatients(filtered);
    };

    return (
        <div>
            <div className="flex flex-row w-full z-50">
                <div>
                    <p className="flex items-center text-[#FECA37] text-xs h-7 w-40 font-bold border border-b-0 border-[#0090FF] pl-2 pr-9 -mb-[1px] bg-[#ECF7FC]">
                        Patient Finder
                    </p>
                </div>
            </div>
            <div className="flex flex-col p-4 w-full bg-[#ECF7FC] border border-[#0090FF] shadow-lg h-auto">
                <div className="flex flex-row items-center p-2 ml-2">
                    <label className="mr-4 text-[16px]">Search Patient</label>

                    <div className="relative w-[500px] h-[38px]">
                        <input
                            id="searchPatient"
                            name="searchPatient"
                            placeholder="Search Patient"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="bg-white border border-gray-600 rounded-lg w-full py-2 px-4 text-sm inset-shadow-sm inset-shadow-gray-300"
                        />
                        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 rounded-lg inset-shadow-sm inset-shadow-gray-300 border border-gray-400">
                            <MagnifyingGlassIcon className="size-5 stroke-neutral-500 stroke-2" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col p-4">
                    <p className="text-[16px] font-bold mb-2">Patient Record</p>

                    {filteredPatients.length > 0 ? (
                        filteredPatients.map((patient, index) => (
                            <div
                                key={index}
                                className="w-full h-auto bg-white p-4 border-2 border-stone-300 rounded-lg shadow-lg mb-2"
                            >
                                <p className="pl-2 font-bold">
                                    {patient.firstName} {patient.middleName}{' '}
                                    {patient.lastName}
                                </p>
                                <p className="pl-2">
                                    Dental Procedure: {patient.procedure}
                                </p>
                                <p className="pl-2">
                                    Diagnosis: {patient.diagnosis}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 pl-2">No results found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
