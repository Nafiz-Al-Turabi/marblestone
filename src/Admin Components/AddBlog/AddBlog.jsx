import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../Axios/AxiosInstance';

const image_token = "6a61f4573470b3c2d847bbcd4cd9b15a";

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);  // State to track submission status
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`;

    const onSubmit = async (data) => {
        setIsSubmitting(true);  // Disable the submit button
        try {
            const imageFile = data.image[0];
            const formData = new FormData();
            formData.append('image', imageFile);

            const imageResponse = await fetch(image_hosting_url, {
                method: 'POST',
                body: formData
            });

            const imageResult = await imageResponse.json();
            const imageUrl = imageResult.data.url;

            const agentData = {
                ...data,
                image: imageUrl
            };

            const response = await axiosInstance.post('/postblog', agentData);
            if (response) {
                console.log('Blog Data added:', response.data);
                reset()
            }
        } catch (error) {
            console.log('Failed to post blog', error);
        } finally {
            setIsSubmitting(false);  // Re-enable the submit button after submission
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
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
                    className={`w-32 text-white rounded-md p-2 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                    disabled={isSubmitting}  // Disable the button if form is submitting
                >
                    {isSubmitting ? <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div> : 'Add'}
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
