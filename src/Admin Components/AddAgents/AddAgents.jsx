import { useForm, Controller } from 'react-hook-form';
import axiosInstance from '../../Axios/AxiosInstance';
const image_token = "6a61f4573470b3c2d847bbcd4cd9b15a"


const AddAgents = () => {
    const { control, handleSubmit, register, watch, formState: { errors }, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`
    const onSubmit = async (data) => {
        try {
            const imageFile = data.image[0];
            const formData = new FormData();
            formData.append('image', imageFile);

            const imageResponse = await fetch(image_hosting_url, {
                method: 'POST',
                body: formData
            });

            const imageResult= await imageResponse.json();
            const imageUrl = imageResult.data.url;

            const agentData ={
                ...data,
                image:imageUrl
            }
            const response = await axiosInstance.post('/addagent', agentData);
            reset();
        } catch (error) {
            console.log(error);
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
                    >
                        Add Agent
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAgents;
