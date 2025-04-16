import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useCalendarContext } from '../../contexts/CalendarContext';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const PatientRecord = ({ addTab }) => {
    const { selectedPatient } = useCalendarContext();

    return (
        <div className="flex flex-col bg-primary-bg ">
            <div className="flex flex-row gap-x-2 items-center">
                <button className="cursor-pointer p-2 rounded shadow-lg border border-primary hover:bg-primary/80 group disabled:opacity-50 disabled:cursor-not-allowed">
                    <Bars3Icon className="size-5 text-primary stroke-2 stroke-primary group-hover:stroke-white" />
                </button>

                <button
                    className="cursor-pointer p-2 rounded shadow-lg bg-primary hover:bg-primary/60 active:bg-primary"
                    disabled
                >
                    <MagnifyingGlassIcon className="size-5 text-primary stroke-white stroke-2" />
                </button>

                <button
                    className="h-8 p-2 bg-[#FEC937] flex ml-auto items-center justify-center text-white rounded-md hover:shadow-[0_0_8px_#FEC937] cursor-pointer"
                    onClick={() => {
                        addTab('request-procedure');
                    }}
                >
                    <p className="text-sm ml-1 font-semibold">
                        Request Procedure
                    </p>
                </button>
            </div>

            <p className="text-[14px] font-bold mb-2 mt-6">Patient Record</p>

            <div className="w-full h-auto bg-white p-4 border-2 border-stone-300 rounded-lg shadow-lg mb-2">
                {selectedPatient ? (
                    <div>
                        <p className="pl-2 font-bold">
                            {selectedPatient.firstName}{' '}
                            {selectedPatient.middleName}{' '}
                            {selectedPatient.lastName}
                        </p>
                        <p className="pl-2">
                            Dental Procedure: {selectedPatient.procedure}
                        </p>
                        <p className="pl-2">
                            Diagnosis: {selectedPatient.diagnosis}
                        </p>
                    </div>
                ) : (
                    ''
                )}
            </div>

            <div className="bg-white shadow-lg">
                <div className="flex flex-row items-center inset-shadow-[0px_0px_4px] shadow inset-shadow-gray-400 px-5 py-2">
                    <p className="font-bold">Dental</p>
                    <div className="ml-auto">
                        <EditOutlinedIcon sx={{ fontSize: '20px' }} />
                    </div>
                </div>

                <div className="px-10 py-4">
                    <p className="mb-2">Tooth type</p>

                    <div className="h-12 border border-zinc-300 backdrop-blur-sm shadow-md flex flex-row rounded-lg mb-4">
                        <div className="flex items-center flex-1 justify-start ml-4">
                            <input
                                type="radio"
                                id="deciduosTooth"
                                name="toothType"
                                value=""
                                className="accent-primary h-4 w-6 mr-2"
                            />
                            <label className="text-sm font-medium">
                                Deciduous Tooth
                            </label>
                        </div>

                        <div className="w-[1px] bg-gray-300 self-stretch " />

                        <div className=" flex items-center flex-1 justify-start ml-4">
                            <input
                                type="radio"
                                id="permanentTooth"
                                name="toothType"
                                value=""
                                className="accent-primary h-4 w-6 mr-2"
                            />
                            <label className="text-sm font-medium">
                                Permanent Tooth
                            </label>
                        </div>
                    </div>
                    <div className="w-full flex flex-row gap-2">
                        <div className="w-full flex flex-row items-center border rounded-md bg-[#DBDBDB] p-4">
                            <input
                                type="radio"
                                id="upperRight"
                                name="toothPlace"
                                value=""
                                className="accent-primary h-4 w-6 mr-2"
                            />
                            <label className="text-sm">Upper Right</label>
                        </div>

                        <div className="w-full flex flex-row items-center border rounded-md bg-[#DBDBDB] p-4">
                            <input
                                type="radio"
                                id="upperLeft"
                                name="toothPlace"
                                value=""
                                className="accent-primary h-4 w-6 mr-2"
                            />
                            <label className="text-sm ">Upper Left</label>
                        </div>
                    </div>

                    {/* <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-600 transform -translate-x-1/2" />

                    <div className="top-1/2 left-0 right-0 h-[.5px] bg-gray-600 transform -translate-y-1/2 mt-2" /> */}

                    <div className="w-full flex flex-row gap-2 mt-2">
                        <div className="w-full flex flex-row items-center border rounded-md bg-[#DBDBDB] p-4">
                            <input
                                type="radio"
                                id="lowerRight"
                                name="toothPlace"
                                value=""
                                className="accent-primary h-4 w-6 mr-2"
                            />
                            <label className="text-sm">Lower Right</label>
                        </div>

                        <div className="w-full flex flex-row items-center border rounded-md bg-[#DBDBDB] p-4">
                            <input
                                type="radio"
                                id="lowerRight"
                                name="toothPlace"
                                value=""
                                className="accent-primary h-4 w-6 mr-2"
                            />
                            <label className="text-sm ">Lower Left</label>
                        </div>
                    </div>

                    <div className="mb-4 mt-6 ">
                        <div className="h-auto border border-zinc-300 backdrop-blur-sm shadow-md">
                            <table className="w-full text-sm border-separate border-spacing-y-2 border-spacing-x-9">
                                <thead>
                                    <tr className="px-4 text-left border-b border-zinc-300">
                                        <th className="h-12">CPT Code</th>
                                        <th>Dental Procedure</th>
                                        <th>ICD Code</th>
                                        <th>Diagnosis</th>
                                        <th>Tooth No. & Tag</th>
                                        <th>Mouth Region</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="text-left align-top border-b-2 border-zinc-300">
                                        <td className="h-10 align-top">
                                            DEN003
                                        </td>
                                        <td className="whitespace-normal max-w-[60px] align-top">
                                            DEN003-Simple Tooth Extraction
                                        </td>
                                        <td className="align-top">K00.1</td>
                                        <td className="whitespace-normal max-w-[60px] align-top">
                                            K00.1-Disorder of Tooth Development
                                            and Eruption
                                        </td>
                                        <td className="align-top">12</td>
                                        <td className="align-top">
                                            Upper Left
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
