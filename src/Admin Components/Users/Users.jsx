import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Axios/AxiosInstance';
import { IoTrashBin } from 'react-icons/io5';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axiosInstance.get('/users');
            if (response) {
                setUsers(response.data);
            }
        } catch (error) {
            console.log('Users not found:', error);
        }
    };

    const displayUsers = users.slice(0, 4);
    const userCount = users.length > 4 ? users.length - 4 : 0;


    return (
        <div className="p-6">
            {/* Display user avatars */}
            <div className='mt-6 flex md:block lg:flex gap-2 items-center'>
                <div className='flex -space-x-3'>
                    {displayUsers.map(user => (
                        <div key={user._id} className='relative'>
                            <img src={user.photoURL} alt="" className='w-10 h-10 rounded-full border border-gray-300 object-cover' />
                        </div>
                    ))}
                    {userCount > 0 && (
                        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-white font-semibold'>
                            +{userCount}
                        </div>
                    )}
                </div>
            </div>

            {/* Display user table */}
            <div className='mt-6 overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>#</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Photo</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Name</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{index + 1}</td>
                                <td className='px-6 py-4 whitespace-nowrap'>
                                    <img src={user.photoURL} alt="" className='w-12 h-12 rounded-full object-cover' />
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{user.name}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.email}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className='text-xl text-red-600 hover:text-red-900 hover:scale-105 transition-transform duration-300 ease-in-out'
                                    >
                                        <IoTrashBin />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
