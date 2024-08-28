import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddAgents = () => {
    const { control, handleSubmit, register, watch, formState: { errors } } = useForm({
        defaultValues: {
            image: '',
            name: '',
            designation: '',
            email: '',
            phone: '',
            description: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const imagePreview = watch('image');

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Agent</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Image Upload */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-2">Image</label>
                    <Controller
                        name="image"
                        control={control}
                        render={({ field }) => (
                            <>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            field.onChange(file);
                                            // Set image preview URL
                                            field.onChange(URL.createObjectURL(file));
                                        }
                                    }}
                                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                                />
                                {imagePreview && (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="mt-2 w-32 h-32 object-cover rounded-md"
                                    />
                                )}
                            </>
                        )}
                    />
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

                {/* Description */}
                <div>
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
