import { useState } from 'react';
import { Modal } from './components/Modal';
import AddIcon from '@mui/icons-material/Add';
import { appointments } from '../shared/utils/constants';

export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModalClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="border border-primary-border p-4">
            <div className="bg-white shadow-lg">
                <div className="inset-shadow-[0px_0px_4px] shadow inset-shadow-gray-400 px-5 py-3">
                    <p className="font-bold text-lg">Plan</p>
                </div>

                <div className="p-6">
                    <div className="flex justify-end">
                        <button
                            className="h-6 p-2 sm:h-8 bg-[#FEC937] flex items-center justify-center text-white rounded-md hover:shadow-[0_0_8px_#FEC937] cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        >
                            <AddIcon sx={{ fontSize: '20px' }} />
                            <p className="text-sm ml-1 font-semibold">
                                Create Plan
                            </p>
                        </button>
                    </div>

                    {/* <div className="h-[calc(100vh-250px)] overflow-y-auto mt-2"> */}
                    <div>
                        {appointments.map((constant, index) => (
                            <div
                                key={index}
                                className="flex flex-row w-full h-16 border-t-0 rounded mt-4 shadow-[0px_4px_6px_rgba(0,0,0,0.2)] p-2 text-stone-600"
                            >
                                <p className="ml-2">{constant.cardType}</p>

                                <div className="flex flex-row items-center ml-auto">
                                    <div className="flex items-center justify-center w-32 h-6 text-xs bg-[#C1D6C1] rounded-md text-black">
                                        <p>{`Plan ID: ${constant.planId}`}</p>
                                    </div>

                                    <button className="w-16 h-6 bg-[#00BA00] rounded-md text-xs text-white ml-5 hover:shadow-[0_0_8px_#00BA00] font-semibold mr-4">
                                        View
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* </div> */}

                    <Modal isOpen={isOpen} onClose={handleModalClose}>
                        <div className="p-4">
                            <h2 className="font-bold text-lg">
                                Create a New Plan
                            </h2>

                            <button
                                onClick={handleModalClose}
                                className="mt-4 p-2 bg-red-500 text-white rounded"
                            >
                                Close
                            </button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};
