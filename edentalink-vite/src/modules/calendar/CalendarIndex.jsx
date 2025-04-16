import { CalendarProvider } from '../../contexts/CalendarContext';
import { Close as XMarkIcon } from '@mui/icons-material';
import { RequestProcedure } from './RequestProcedure';
import { Calandar } from '../calendar/Calendar';
import { PatientRecord } from './PatientRecord';
import { Summary } from './Summary';
import { useState } from 'react';

const InactiveTab = ({ tabName, selectTab, removeTab }) => (
    <div className="shadow flex flex-nowrap flex-1 min-w-[40px] max-w-1/4 bg-primary-bg hover:bg-blue-100 font-semibold border-b border-primary-border">
        <button
            tabIndex={-1}
            onClick={() => selectTab(tabName)}
            className="h-full w-full text-left min-w-[10px] px-2 text-primary/80"
        >
            <p className="capitalize text-xs truncate">
                {tabName.replace('-', ' ')}
            </p>
        </button>

        <button
            tabIndex={-1}
            onClick={() => removeTab(tabName)}
            className="min-w-[25px] hover:bg-gray-200"
        >
            <XMarkIcon style={{ fontSize: '12px' }} />
        </button>
    </div>
);

const ActiveTab = ({ tabName, removeTab, tabs = [] }) => (
    <div className="min-w-[160px] w-1/4">
        <div className="flex flex-1 flex-nowrap bg-primary-bg border-t border-x border-primary-border">
            <button
                tabIndex={-1}
                className="h-full w-full text-left min-w-[40px] px-2 py-1.5"
            >
                <p className="capitalize text-xs font-bold truncate text-primary">
                    {tabName.replace('-', ' ')}
                </p>
            </button>

            {tabs.length === 1 ? (
                <button tabIndex={-1} className="min-w-[25px]">
                    <XMarkIcon
                        style={{ fontSize: '12px' }}
                        className="text-gray-400"
                    />
                </button>
            ) : (
                <button
                    tabIndex={-1}
                    onClick={() => removeTab(tabName)}
                    className="min-w-[25px] hover:bg-gray-200"
                >
                    <XMarkIcon style={{ fontSize: '12px' }} />
                </button>
            )}
        </div>
    </div>
);

const getTabContent = (tabName, addTab) => {
    switch (tabName) {
        case 'calendar':
            return <Calandar addTab={addTab} />;
        case 'patient-record':
            return <PatientRecord addTab={addTab} />;
        case 'request-procedure':
            return <RequestProcedure />;
        case 'summary':
            return <Summary />;
        default:
            return null;
    }
};

export const CalendarIndex = () => {
    const [tabs, setTabs] = useState(['calendar']);
    const [activeTab, setActiveTab] = useState('calendar');

    const selectTab = (tabName) => {
        setActiveTab(tabName);
    };

    const removeTab = (tabName) => {
        const index = tabs.indexOf(tabName);
        const newTabs = tabs.filter((tab) => tab !== tabName);

        if (activeTab === tabName) {
            const nextActiveTab = newTabs[index] || newTabs[index - 1] || '';
            setActiveTab(nextActiveTab);
        }

        setTabs(newTabs);
    };

    const addTab = (tabName) => {
        if (!tabs.includes(tabName)) {
            setTabs([...tabs, tabName]);
            setActiveTab(tabName);
        } else {
            setActiveTab(tabName);
        }
    };

    return (
        <div>
            <div className="flex overflow-hidden flex-nowrap max-w-[640px]">
                {tabs.map((tab) =>
                    tab === activeTab ? (
                        <ActiveTab
                            key={tab}
                            tabName={tab}
                            removeTab={removeTab}
                            tabs={tabs}
                        />
                    ) : (
                        <InactiveTab
                            key={tab}
                            tabName={tab}
                            selectTab={selectTab}
                            removeTab={removeTab}
                        />
                    )
                )}
            </div>
            <div className="-mt-[1px] bg-primary-bg border border-primary-border p-4 overflow-auto">
                {getTabContent(activeTab, addTab)}
            </div>
        </div>
    );
};
