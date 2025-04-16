import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';

export const Modal = ({ isOpen, onClose }) => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [inputSets, setInputSets] = useState([{}]);

    const handleChange = (setter, value, min, max) => {
        if (value === '' || (value >= min && value <= max)) {
            setter(value);
        }
    };

    const FieldWithButtons = ({ value, setValue, min, max, placeholder }) => (
        <div className="flex items-center">
            <TextField
                value={value}
                onChange={(e) =>
                    handleChange(setValue, + e.target.value, min, max)
                }
                size="small"
                className="w-18 shadow-md"
                placeholder={placeholder}
                inputProps={{ className: 'text-center', min, max }}
            />
            <div className="flex flex-col gap-0 items-center leading-none mr-4">
                <IconButton
                    className="w-4 h-4 p-0"
                    onClick={() =>
                        setValue((next) =>
                            next ? (next < max ? next + 1 : min) : min
                        )
                    }
                >
                    <ArrowDropUpRoundedIcon
                        sx={{ fontSize: '32px', color: '#00BA00' }}
                    />
                </IconButton>

                <IconButton
                    className="w-4 h-4 p-0"
                    onClick={() =>
                        setValue((prev) =>
                            prev ? (prev > min ? prev - 1 : max) : max
                        )
                    }
                >
                    <ArrowDropDownRoundedIcon
                        sx={{ fontSize: '32px', color: '#00BA00' }}
                    />
                </IconButton>
            </div>
        </div>
    );

    const handleAddSet = () => {
        setInputSets([...inputSets, {}]);
    };

    const handleRemoveSet = (index) => {
        setInputSets(inputSets.filter((_, i) => i !== index));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-white w-[650px] h-[540px] rounded-lg shadow-lg overflow-y-auto">
                <div className="h-10 border border-zinc-300 backdrop-blur-sm shadow-md">
                    <p className="p-2 ml-2 font-bold"> Create Plans</p>
                </div>
                <div className="flex flex-col mt-2 p-4">
                    {inputSets.map((_, index) => (
                        <div key={index} className="mb-2">
                            <div className="flex flex-row items-end justify-end">
                                {index > 0 && (
                                    <div className="flex flex-col">
                                        <IconButton
                                            onClick={() =>
                                                handleRemoveSet(index)
                                            }
                                            sx={{
                                                backgroundColor: '#FF3B30',
                                                color: 'white',
                                                borderRadius: '50%',
                                                width: '24px',
                                                height: '24px',
                                                '&:hover': {
                                                    backgroundColor: '#D32F2F',
                                                },
                                            }}
                                        >
                                            <DeleteIcon
                                                sx={{ fontSize: '16px' }}
                                            />
                                        </IconButton>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-row flex-wrap md:flex-nowrap gap-2">
                                <div className="w-full md:w-auto flex-1">
                                    <p>Procedure</p>
                                    <select className="w-full h-9 px-2 py-1 border rounded-md shadow-md">
                                        <option
                                            value=""
                                            disabled
                                            selected
                                        ></option>
                                    </select>
                                </div>

                                <div className="flex-1">
                                    <p>Quantity</p>
                                    <input
                                        type="number"
                                        placeholder="Enter Quantity"
                                        className="w-full h-9 border rounded p-2 pl-4 shadow-md focus:outline-none placeholder:text-sm"
                                    />
                                </div>

                                <div className="flex items-center mt-auto">
                                    <input
                                        type="checkbox"
                                        className="w-6 h-6 mx-2"
                                    />
                                    <label>Unli</label>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    onClick={handleAddSet}
                                    className="w-6 h-6 border rounded-full flex items-center justify-center bg-[#00BA00] text-white"
                                >
                                    <AddIcon sx={{ fontSize: '16px' }} />
                                </button>
                            </div>

                            <div className="mt-6">
                                <div className="flex flex-col mt-4">
                                    <label>Plan Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Plan Name"
                                        className="h-9 border rounded pl-2 placeholder:text-sm"
                                    />
                                    <label className="mt-4">Price</label>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="h-9 border rounded pl-2 placeholder:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                <label>Validity</label>
                                <div className="flex gap-2">
                                    <FieldWithButtons
                                        value={year}
                                        setValue={setYear}
                                        min={1900}
                                        max={2100}
                                        placeholder="YYYY"
                                    />
                                    <FieldWithButtons
                                        value={month}
                                        setValue={setMonth}
                                        min={1}
                                        max={12}
                                        placeholder="MM"
                                    />
                                    <FieldWithButtons
                                        value={day}
                                        setValue={setDay}
                                        min={1}
                                        max={31}
                                        placeholder="DD"
                                    />
                                </div>
                            </div>

                            {index !== inputSets.length - 1 && (
                                <hr className="mt-6 border-gray-300" />
                            )}
                        </div>
                    ))}

                    <div className="mt-14 flex justify-center gap-2">
                        <button
                            onClick={onClose}
                            className="w-30 h-10 border-2 border-[#0090FF] text-[#0090FF] font-bold rounded-lg shadow-lg cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button className="w-30 h-10 border border-[#0090FF] bg-[#0090FF] text-white font-bold rounded-lg">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
