import { useForm, Controller } from 'react-hook-form';
import axiosInstance from '../../Axios/AxiosInstance';
import { useState } from 'react';
const image_token = "6a61f4573470b3c2d847bbcd4cd9b15a"


const AddAgents = () => {
    const [isSubmitting, setIsSubmittin] = useState(false);
    const { control, handleSubmit, register, watch, formState: { errors }, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`
    const onSubmit = async (data) => {
        setIsSubmittin(true);
        try {
            const imageFile = data.image[0];
            const formData = new FormData();
            formData.append('image', imageFile);

            const imageResponse = await fetch(image_hosting_url, {
                method: 'POST',
                body: formData
            });

            const imageResult = await imageResponse.json();
            const imageUrl = imageResult.data.
                url;

            const agentData = {
                ...data,
                image: imageUrl
            }
            const response = await axiosInstance.post('/addagent', agentData);
            reset();
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmittin(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Agent</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
                {/* Image Upload */}
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

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^@]+@[^@]+\.[^@]+$/,
                                message: 'Invalid email address'
                            }
                        })}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                        type="tel"
                        {...register('phone', { required: 'Phone number is required' })}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                {/* Designation */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                    <input
                        type="text"
                        {...register('designation', { required: 'Designation is required' })}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                    />
                    {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>}
                </div>

                {/* Experience */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                    <input
                        type="text"
                        {...register('experience', { required: 'Experience is required' })}
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                    />
                    {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
                </div>

                {/* About */}
                <div className='col-span-2'>
                    <label className="block text-sm font-medium text-gray-700 mb-2">About</label>
                    <textarea
                        {...register('about')}
                        rows="4"
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                    ></textarea>
                </div>
                {/* Description */}
                <div className='col-span-2'>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                        {...register('description')}
                        rows="4"
                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div> : 'Add agent'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAgents;
