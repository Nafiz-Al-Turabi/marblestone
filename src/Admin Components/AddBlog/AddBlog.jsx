import React from 'react';
import { useForm } from 'react-hook-form';

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle the form submission, e.g., send data to an API
    };

    return (

        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-2 gap-5">
                <div className='col-span-2'>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        {...register('title', { required: 'Title is required' })}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.title && <p className="mt-2 text-sm text-red-600">{errors.title.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        {...register("image", { required: 'Image is required' })}
                        className="mt-1 block w-full border rounded-md p-1 "
                    />
                    {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                </div>

                <div className='col-span-2'>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        {...register('description', { required: 'Description is required' })}
                        className="mt-1 p-2 block h-56 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>}
                </div>

                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <input
                        id="date"
                        type="date"
                        {...register('date', { required: 'Date is required' })}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.date && <p className="mt-2 text-sm text-red-600">{errors.date.message}</p>}
                </div>

                <div>
                    <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
                        Author Name
                    </label>
                    <input
                        id="authorName"
                        type="text"
                        {...register('authorName', { required: 'Author name is required' })}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.authorName && <p className="mt-2 text-sm text-red-600">{errors.authorName.message}</p>}
                </div>

                <div className='col-span-2'>
                    <label htmlFor="authorEmail" className="block text-sm font-medium text-gray-700">
                        Author Email
                    </label>
                    <input
                        id="authorEmail"
                        type="email"
                        {...register('authorEmail', { required: 'Author email is required' })}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {errors.authorEmail && <p className="mt-2 text-sm text-red-600">{errors.authorEmail.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-32 bg-indigo-600 text-white rounded-md p-2 shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
