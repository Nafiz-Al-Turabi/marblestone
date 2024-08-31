import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import FullMessage from '../FullMessage/FullMessage';

const Messages = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [openFullMessage, setOpenFullMessage] = useState(false);

    const toggleOpenMessage = () => {
        setOpenFullMessage(!openFullMessage)
    }

    const messages = [
        { id: 1, name: 'Nafiz', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '20 Mar' },
        { id: 2, name: 'Mofiz', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '21 Mar' },
        { id: 3, name: 'Masud', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', date: '5 Mar' },
        // Add more messages here
    ];

    const handleCheckboxChange = (id) => {
        setSelectedRows(prevSelectedRows =>
            prevSelectedRows.includes(id)
                ? prevSelectedRows.filter(rowId => rowId !== id)
                : [...prevSelectedRows, id]
        );
    };

    return (
        <div className='p-4'>
            <div className='overflow-x-auto'>
                <div className=''>
                    <table className='min-w-full bg-white shadow rounded-lg'>
                        <tbody>
                            {messages.map(message => (
                                <tr key={message.id} className='hover:bg-gray-50 duration-300 cursor-pointer'>
                                    <td className='py-[15px] px-4 flex items-center space-x-5'>
                                        <input
                                            type='checkbox'
                                            checked={selectedRows.includes(message.id)}
                                            onChange={() => handleCheckboxChange(message.id)}
                                            className='form-checkbox h-5 w-5 text-green-500'
                                        />
                                        <FaStar className='text-yellow-500' />
                                    </td>
                                    <td  className='py-2 px-4 text-gray-800'>{message.name}</td>
                                    <td onClick={toggleOpenMessage} className='py-2 px-4 text-gray-800'>{message.message}</td>
                                    <td className='py-2 px-4 text-gray-800'>{message.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                {
                    openFullMessage && <FullMessage toggleOpenMessage={toggleOpenMessage}></FullMessage>
                }
            </div>
        </div>
    );
};

export default Messages;
