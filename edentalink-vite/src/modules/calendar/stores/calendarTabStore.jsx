import { useState } from 'react';

export const useCalendarTabStore = () => {
    const [state, setState] = useState({
        tabs: ['calendar'],
        activeTab: 'calendar',
        params: {},
    });

    const addTab = (tabName, newParams) => {
        setState((prevState) => {
            const updatedTabs = Array.from(new Set([...prevState.tabs, tabName]));
            return {
                ...prevState,
                tabs: updatedTabs,
                activeTab: tabName, 
                params: { ...prevState.params, [tabName]: newParams }, 
            };
        });
    };

   
    const removeTab = (tabName) => {
        setState((prevState) => {
            const updatedTabs = prevState.tabs.filter((tab) => tab !== tabName);
            let activeTab = prevState.activeTab;

            if (updatedTabs.length === 0) return prevState;

            if (activeTab === tabName) {
                activeTab = updatedTabs[0];
            }

            return {
                ...prevState,
                tabs: updatedTabs,
                activeTab,
            };
        });
    };

    const selectTab = (tabName) => {
        setState((prevState) => ({
            ...prevState,
            activeTab: tabName,
        }));
    };

    return {
        tabs: state.tabs,
        activeTab: state.activeTab,
        params: state.params,
        addTab,
        removeTab,
        selectTab,
    };
};
