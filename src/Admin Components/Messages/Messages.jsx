import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import FullMessage from '../FullMessage/FullMessage';
import { IoMdTrash } from 'react-icons/io';
import axiosInstance from '../../Axios/AxiosInstance';

const Messages = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [openFullMessage, setOpenFullMessage] = useState(false);
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const toggleOpenMessage = (message) => {
        setSelectedMessage(message);
        setOpenFullMessage(!openFullMessage);
    };

    useEffect(() => {
        fetchMessage();
    }, []);

    const fetchMessage = async () => {
        try {
            const response = await axiosInstance.get('/contacts');
            if (response) {
                setMessages(response.data);
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const handleCheckboxChange = (id) => {
        setSelectedRows(prevSelectedRows =>
            prevSelectedRows.includes(id)
                ? prevSelectedRows.filter(rowId => rowId !== id)
                : [...prevSelectedRows, id]
        );
    };

    const truncateMessage = (message, wordLimit = 20) => {
        const words = message.split(' ');
        if (words.length <= wordLimit) return message;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    const handleDelete = async () => {
        if (selectedRows.length === 0) return;

        try {
            const response = await axiosInstance.delete('/contacts', {
                data: { ids: selectedRows }
            });

            if (response.status === 200) {
                setMessages(messages.filter(message => !selectedRows.includes(message._id)));
                setSelectedRows([]); // Clear selected rows
            }
        } catch (error) {
            console.error('Error deleting messages:', error);
        }
    };

    return (
        <div className='p-4'>
            <div className='bg-white mb-5 p-3 flex items-center'>
                <div>
                    <h1>All Messages</h1>
                </div>
            </div>
            {selectedRows.length > 0 && (
                <button
                    onClick={handleDelete}
                    className='text-2xl mb-5 text-red-500 border p-2 rounded hover:bg-white duration-300 active:scale-95'
                >
                    <IoMdTrash />
                </button>
            )}
            <div className='overflow-x-auto'>
                <div className=''>
                    <table className='min-w-full bg-white shadow rounded-lg'>
                        <tbody>
                            {messages.map(message => (
                                <tr key={message._id} className='hover:bg-gray-50 duration-300 cursor-pointer'>
                                    <td className='py-[15px] px-4 flex items-center space-x-5'>
                                        <input
                                            type='checkbox'
                                            checked={selectedRows.includes(message._id)}
                                            onChange={() => handleCheckboxChange(message._id)}
                                            className='form-checkbox h-5 w-5 text-green-500'
                                        />
                                        <FaStar className='text-yellow-500' />
                                    </td>
                                    <td className='py-2 px-4 text-gray-800'>
                                        {message.firstName + message.lastName}
                                    </td>
                                    <td onClick={() => toggleOpenMessage(message)} className='py-2 px-4 text-gray-800'>
                                        {truncateMessage(message.message)}
                                    </td>
                                    <td className='py-2 px-4 text-gray-400'>{message.timestamp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {openFullMessage && selectedMessage && (
                <FullMessage message={selectedMessage} toggleOpenMessage={toggleOpenMessage} />
            )}
        </div>
    );
};

export default Messages;
