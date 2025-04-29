import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useCalendarContext } from '../../contexts/CalendarContext';
import { Close as CloseIcon } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { useState } from 'react';

import UR11 from '../calendar/toothAssests/UR11.png';
import UR12 from '../calendar/toothAssests/UR12.png';
import UR13 from '../calendar/toothAssests/UR13.png';
import UR14 from '../calendar/toothAssests/UR14.png';
import UR15 from '../calendar/toothAssests/UR15.png';
import UR16 from '../calendar/toothAssests/UR16.png';
import UR17 from '../calendar/toothAssests/UR17.png';
import UR18 from '../calendar/toothAssests/UR18.png';

import LR41 from '../calendar/toothAssests/LR41.png';
import LR42 from '../calendar/toothAssests/LR42.png';
import LR43 from '../calendar/toothAssests/LR43.png';
import LR44 from '../calendar/toothAssests/LR44.png';
import LR45 from '../calendar/toothAssests/LR45.png';
import LR46 from '../calendar/toothAssests/LR46.png';
import LR47 from '../calendar/toothAssests/LR47.png';
import LR48 from '../calendar/toothAssests/LR48.png';

import UL21 from '../calendar/toothAssests/UL21.png';
import UL22 from '../calendar/toothAssests/UL22.png';
import UL23 from '../calendar/toothAssests/UL23.png';
import UL24 from '../calendar/toothAssests/UL24.png';
import UL25 from '../calendar/toothAssests/UL25.png';
import UL26 from '../calendar/toothAssests/UL26.png';
import UL27 from '../calendar/toothAssests/UL27.png';
import UL28 from '../calendar/toothAssests/UL28.png';

import LL31 from '../calendar/toothAssests/LL31.png';
import LL32 from '../calendar/toothAssests/LL32.png';
import LL33 from '../calendar/toothAssests/LL33.png';
import LL34 from '../calendar/toothAssests/LL34.png';
import LL35 from '../calendar/toothAssests/LL35.png';
import LL36 from '../calendar/toothAssests/LL36.png';
import LL37 from '../calendar/toothAssests/LL37.png';
import LL38 from '../calendar/toothAssests/LL38.png';

const URToothImages = [UR18, UR17, UR16, UR15, UR14, UR13, UR12, UR11];
const LRToothImages = [LR48, LR47, LR46, LR45, LR44, LR43, LR42, LR41];
const ULToothImages = [UL21, UL22, UL23, UL24, UL25, UL26, UL27, UL28];
const LLToothImages = [LL31, LL32, LL33, LL34, LL35, LL36, LL37, LL38];

const checkboxToothTag = (
    <Checkbox
        icon={
            <Box
                sx={{
                    width: 56,
                    height: 24,
                    border: '2px solid gray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                }}
            />
        }
        checkedIcon={
            <Box
                sx={{
                    width: 56,
                    height: 24,
                    border: '2px solid gray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    bgcolor: '#DBDBDB',
                }}
            >
                <CloseIcon
                    sx={{
                        color: 'black',
                        fontSize: 16,
                    }}
                />
            </Box>
        }
    />
);

export const RequestProcedure = () => {
    const { selectedPatient } = useCalendarContext();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1;

    const patientData = selectedPatient ? [selectedPatient] : [];
    const totalPages = Math.ceil(patientData.length / itemsPerPage);
    const paginatedData = patientData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="flex flex-col bg-primary-bg">
            {/* Header Buttons */}
            <div className="flex flex-row gap-x-2 items-center mb-4">
                <button className="cursor-pointer p-2 rounded shadow-lg border border-primary hover:bg-primary/80 group disabled:opacity-50 disabled:cursor-not-allowed">
                    <Bars3Icon className="size-5 text-primary stroke-2 stroke-primary group-hover:stroke-white" />
                </button>

                <button
                    className="cursor-pointer p-2 rounded shadow-lg bg-primary hover:bg-primary/60 active:bg-primary"
                    disabled
                >
                    <MagnifyingGlassIcon className="size-5 text-primary stroke-white stroke-2" />
                </button>
            </div>

            {/* Dental Section */}
            <div className="bg-white shadow-lg ">
                <div className="flex flex-row items-center inset-shadow-[0px_0px_4px] shadow inset-shadow-gray-400 px-5 py-2">
                    <p className="font-bold">Dental</p>
                </div>

                <div className="p-4 ml-6">
                    <p>Dental Procedure</p>
                    <div className="relative w-full">
                        <input
                            id="dentalProcedure"
                            name="dentalProcedure"
                            placeholder="Enter Dental Procedure"
                            className="bg-white border border-gray-600 rounded-lg w-full mb-4 py-2 pr-10 px-4 text-sm inset-shadow-sm inset-shadow-gray-300"
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-[19px] -translate-y-1/2 p-2 rounded-lg inset-shadow-sm inset-shadow-gray-300 border border-gray-40"
                        >
                            <MagnifyingGlassIcon className="size-5 stroke-neutral-500 stroke-2" />
                        </button>
                    </div>

                    <p>Diagnosis</p>
                    <div className="relative w-full">
                        <input
                            id="diagnosis"
                            name="diagnosis"
                            placeholder="Enter Diagnosis"
                            className="bg-white border border-gray-600 rounded-lg w-full py-2 pr-10 px-4 text-sm inset-shadow-sm inset-shadow-gray-300"
                        />
                        <button
                            type="button"
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-lg inset-shadow-sm inset-shadow-gray-300 border border-gray-40"
                        >
                            <MagnifyingGlassIcon className="size-5 stroke-neutral-500 stroke-2" />
                        </button>
                    </div>
                </div>

                <div className="px-10 py-4">
                    {/* Tooth Type Selection */}
                    <p className="mb-2">Tooth type</p>

                    <div className="h-12 border border-zinc-300 backdrop-blur-sm shadow-md flex flex-row rounded-lg mb-4">
                        <div className="flex items-center flex-1 justify-start ml-4">
                            <input
                                type="radio"
                                id="deciduosTooth"
                                name="toothType"
                                className=" h-4 w-6 mr-2"
                            />
                            <label className="text-sm font-medium">
                                Deciduous Tooth
                            </label>
                        </div>
                        <div className="w-[1px] bg-gray-300 self-stretch" />
                        <div className="flex items-center flex-1 justify-start ml-4">
                            <input
                                type="radio"
                                id="permanentTooth"
                                name="toothType"
                                className="h-4 w-6 mr-2"
                            />
                            <label className="text-sm font-medium">
                                Permanent Tooth
                            </label>
                        </div>
                    </div>

                    {/* Tooth Region */}
                    <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row gap-6">
                            <div className="w-full flex items-center border border-black rounded-md p-4">
                                <input
                                    type="checkbox"
                                    id="upperRight"
                                    name="mouthRegion"
                                    className="h-4 w-6 mr-2"
                                />
                                <label className="text-sm font-medium">
                                    Upper Right
                                </label>
                            </div>

                            <div className="w-full flex items-center border border-black rounded-md p-4">
                                <input
                                    type="checkbox"
                                    id="upperLeft"
                                    name="mouthRegion"
                                    className="h-4 w-6 mr-2"
                                />
                                <label className="text-sm font-medium">
                                    Upper Left
                                </label>
                            </div>
                        </div>

                        <div className="relative">
                            {/* CROSS */}
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 -translate-y-1/2 z-0" />
                            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-400 -translate-x-1/2 z-0" />
                            
                            <div className="flex flex-col-2">
                                <div className="flex flex-col gap-6 mr-12 lg:mr-9">
                                    <div className="flex flex-row pl-4 gap-5 mb-6 lg:gap-2 ">
                                        {[...Array(8)].map((_, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center justify-center"
                                            >
                                                {checkboxToothTag}
                                                <div className="flex items-center justify-center w-6 h-6 text-xs border border-gray-400 rounded bg-[#DBDBDB] mt-2">
                                                    {18 - index}
                                                </div>
                                                <img
                                                    src={URToothImages[index]}
                                                    alt={`Tooth ${18 - index}`}
                                                    className="w-16 h-26 mt-2"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-row flex-wrap pl-4 gap-5 lg:gap-2">
                                        {[...Array(8)].map((_, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center"
                                            >
                                                <img
                                                    src={LRToothImages[index]}
                                                    alt={`Tooth ${48 - index}`}
                                                    className="w-14 h-24 mt-2"
                                                />
                                                <div className="flex items-center justify-center w-6 h-6 text-xs border border-gray-400 rounded bg-[#DBDBDB] mt-2">
                                                    {48 - index}
                                                </div>
                                                {checkboxToothTag}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                <div className="flex flex-row gap-5 mb-6 lg:gap-2 ">
                                        {[...Array(8)].map((_, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center"
                                            >
                                                {checkboxToothTag}
                                                <div className="flex items-center justify-center w-6 h-6 text-xs border border-gray-400 rounded bg-[#DBDBDB] mt-2">
                                                    {21 - index}
                                                </div>
                                                <img
                                                    src={ULToothImages[index]}
                                                    alt={`Tooth ${21 - index}`}
                                                    className="w-16 h-26 mt-2"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-row gap-5 mb-6 lg:gap-2">
                                        {[...Array(8)].map((_, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center"
                                            >
                                                <img
                                                    src={LLToothImages[index]}
                                                    alt={`Tooth ${31 - index}`}
                                                    className="w-14 h-24 mt-2"
                                                />
                                                <div className="flex items-center justify-center w-6 h-6 text-xs border border-gray-400 rounded bg-[#DBDBDB] mt-2">
                                                    {31 - index}
                                                </div>
                                                {checkboxToothTag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-6">
                            <div className="w-full flex items-center border border-black rounded-md p-4">
                                <input
                                    type="checkbox"
                                    id="upperRight"
                                    name="mouthRegion"
                                    className="h-4 w-6 mr-2"
                                />
                                <label className="text-sm font-medium">
                                    Lower Right
                                </label>
                            </div>

                            <div className="w-full flex items-center border border-black rounded-md p-4">
                                <input
                                    type="checkbox"
                                    id="upperLeft"
                                    name="mouthRegion"
                                    className="h-4 w-6 mr-2"
                                />
                                <label className="text-sm font-medium">
                                    Lower Left
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex grid-cols-2 gap-4 justify-center items-center mt-10">
                        <button className="w-30 h-10 border-2 border-[#0090FF] text-[14px] text-[#0090FF] font-bold rounded-lg shadow-lg cursor-pointer">
                            Clear
                        </button>

                        <button className="w-30 h-10 border border-[#0090FF] bg-[#0090FF] text-[14px] text-white font-bold rounded-lg cursor-pointer">
                            Add Procedure
                        </button>
                    </div>

                    {/* Table with Pagination */}
                    <div className="mb-4 mt-6">
                        <div className="h-auto border border-zinc-300 backdrop-blur-sm shadow-md">
                            <table className="w-full text-sm border-collapse border-spacing-y-4 border-spacing-x-2">
                                <thead>
                                    <tr className="text-center border-b border-zinc-300">
                                        <th className="h-12">CPT Code</th>
                                        <th>Dental Procedure</th>
                                        <th>ICD Code</th>
                                        <th>Diagnosis</th>
                                        <th>Tooth No. & Tag</th>
                                        <th>Mouth Region</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {paginatedData.map((patient, index) => (
                                        <tr
                                            key={index}
                                            className="text-center border-b border-zinc-300"
                                        >
                                            <td className="h-14">
                                                {patient.cptCode}
                                            </td>
                                            <td className="whitespace-normal max-w-[100px]">
                                                {patient.procedure}
                                            </td>
                                            <td>{patient.icdCode}</td>
                                            <td className="whitespace-normal max-w-[120px]">
                                                {patient.diagnosis}
                                            </td>
                                            <td>{patient.toothNo}</td>
                                            <td>{patient.mouthRegion}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Pagination Controls */}
                            <div className="p-4 text-sm flex justify-between items-center">
                                <p className="text-gray-600">
                                    Results: {currentPage} of {totalPages}
                                </p>

                                <div className="flex items-center gap-1">
                                    {/* Left Arrow Button */}

                                    <button
                                        onClick={() =>
                                            setCurrentPage((prev) =>
                                                Math.max(prev - 2, 1)
                                            )
                                        }
                                        disabled={currentPage === 1}
                                        className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition duration-300"
                                    >
                                        &laquo;
                                    </button>
                                    <button
                                        onClick={() =>
                                            setCurrentPage((prev) =>
                                                Math.max(prev - 1, 1)
                                            )
                                        }
                                        disabled={currentPage === 1}
                                        className="px-3 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition duration-300"
                                    >
                                        &lsaquo;
                                    </button>

                                    {/* Current Page Number */}
                                    <span className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-md">
                                        {currentPage}
                                    </span>

                                    {/* Right Arrow Button */}
                                    <button
                                        onClick={() =>
                                            setCurrentPage((prev) =>
                                                Math.min(prev + 1, totalPages)
                                            )
                                        }
                                        disabled={currentPage === totalPages}
                                        className="text-center py-1 px-3  bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition duration-300"
                                    >
                                        &rsaquo;
                                    </button>
                                    <button
                                        onClick={() =>
                                            setCurrentPage((prev) =>
                                                Math.min(prev + 2, totalPages)
                                            )
                                        }
                                        disabled={currentPage === totalPages}
                                        className="text-center py-1 px-3  bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition duration-300"
                                    >
                                        &raquo;
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex grid-cols-2 mt-10">
                            <button className="w-30 h-10 border text-[14px] font-bold rounded-lg shadow-lg cursor-pointer">
                                <p>Back</p>
                            </button>
                            <div className="flex  ml-auto gap-2">
                                <button className="w-30 h-10 border-2 border-[#0090FF] text-[14px] text-[#0090FF] font-bold rounded-lg shadow-lg cursor-pointer">
                                    Save as Draft
                                </button>

                                <button className="w-30 h-10 border border-[#0090FF] bg-[#0090FF] text-[14px] text-white font-bold rounded-lg cursor-pointer">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
