// Tabs.js
import { useEffect, useState } from 'react';
import axiosInstance from '../../Axios/AxiosInstance';
import AgentTable from './AgentTable';
import PropertyTable from './PropertyTable';
import UserTable from './UserTable';
import { FaSearch } from 'react-icons/fa';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('properties');
    const [agents, setAgents] = useState([]);
    const [users, setUsers] = useState([]);
    const [properties, setProperties] = useState([]);
    const [search, setSearch] = useState('');
    const [filterAgents, setFilterAgents] = useState([])


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        fetchAgent();
        fetchUser();
        fetchProperies();
    }, []);

    const fetchAgent = async () => {
        try {
            const resposne = await axiosInstance.get('/agents');
            console.log(resposne.data);
            setAgents(resposne.data);
        } catch (error) {
            console.log('Agent error', error)
        }
    };
    const fetchUser = async () => {
        try {
            const resposne = await axiosInstance.get('/users');
            console.log(resposne.data);
            setUsers(resposne.data);
        } catch (error) {
            console.log('Users error', error)
        }
    };
    const fetchProperies = async () => {
        try {
            const resposne = await axiosInstance.get('/properties');
            console.log(resposne.data);
            setProperties(resposne.data);
        } catch (error) {
            console.log('Prpperty error', error)
        }
    };

    // Delete 
    const handleDeleteAgent = async (id) => {
        try {
            const response = await axiosInstance.delete(`/agents/${id}`);
            console.log('Agent deleted:', response.data);
            fetchAgent();
        } catch (error) {
            console.error('Error deleting agent data:', error);
        }
    };
    const handleDeleteUser = async (id) => {
        try {
            const response = await axiosInstance.delete(`/users/${id}`);
            console.log('User deleted:', response.data);
            fetchUser();
        } catch (error) {
            console.error('Error deleting user data:', error);
        }
    };
    const handleDeleteProperty = async (id) => {
        try {
            const response = await axiosInstance.delete(`/properties/${id}`);
            console.log('Property deleted:', response.data);
            fetchProperies();
        } catch (error) {
            console.error('Error deleting property data:', error);
        }
    };

    useEffect(() => {
        filterAgent();
    }, [search, agents])

    const filterAgent = () => {
        let filtered = agents;
        if (search) {
            filtered = filtered.filter(agent => agent.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilterAgents(filtered)
    }

    return (
        <div className="w-full  mx-auto mt-10">
            {/* Tab headers */}
            <div className="flex border-b border-gray-300">
                <button
                    className={`py-2 px-4 text-sm font-medium ${activeTab === 'agent' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-600'
                        }`}
                    onClick={() => handleTabClick('agent')}
                >
                    Agent
                </button>
                <button
                    className={`py-2 px-4 text-sm font-medium ${activeTab === 'users' ? 'border-b-2 border-rose-500 text-rose-600' : 'text-gray-600'
                        }`}
                    onClick={() => handleTabClick('users')}
                >
                    Users
                </button>
                <button
                    className={`py-2 px-4 text-sm font-medium ${activeTab === 'properties' ? 'border-b-2 border-sky-500 text-sky-600' : 'text-gray-600'
                        }`}
                    onClick={() => handleTabClick('properties')}
                >
                    Properties
                </button>
            </div>

            {/* Tab content */}
            <div className="p-4">
                {activeTab === 'agent' && (
                    <div>
                        <div className="overflow-x-auto">
                            <div className="flex  my-5">
                                <div className="relative ">
                                    <input
                                        type="text"
                                        className="w-full p-3 pl-10 text-gray-900 border border-gray-300 rounded-lg"
                                        placeholder="Search..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                        <FaSearch />
                                    </div>
                                </div>
                            </div>
                            <table className="min-w-full divide-y divide-gray-200 rounded-xl">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                {
                                    filterAgents.map((agent, index) =>
                                        <AgentTable handleDeleteAgent={handleDeleteAgent} agent={agent} key={agent._id} index={index} />
                                    )
                                }
                            </table>
                        </div>
                    </div>
                )}
                {activeTab === 'users' && (
                    <div>
                        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">title</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                {
                                    users.map((user, index) =>
                                        <UserTable handleDeleteUser={handleDeleteUser} user={user} key={user._id} index={index} />
                                    )
                                }
                            </table>
                        </div>
                    </div>
                )}
                {activeTab === 'properties' && (
                    <div>
                        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">title</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                {
                                    properties.map((property, index) =>
                                        <PropertyTable handleDeleteProperty={handleDeleteProperty} property={property} key={property._id} index={index} />
                                    )
                                }
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;
