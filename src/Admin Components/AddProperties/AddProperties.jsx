import React from 'react';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../Axios/AxiosInstance';

const image_token= "6a61f4573470b3c2d847bbcd4cd9b15a"

const AddProperties = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
      const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`

      const onSubmit = async (data) => {
        try {
            // Handle image upload
            const imageFile = data.image[0];
            const formData = new FormData();
            formData.append('image', imageFile);

            const imageResponse = await fetch(image_hosting_url, {
                method: 'POST',
                body: formData,
            });

            const imageResult = await imageResponse.json();
            const imageUrl = imageResult.data.url;

            // Include the image URL in the data
            const propertyData = {
                ...data,
                image: imageUrl,
            };

            // Post data to server
            const response = await axiosInstance.post('/postproperty', propertyData);
            console.log('Property added successfully:', response.data);
            reset();
        } catch (error) {
            console.error('Error adding property:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold  mb-6">Add New Property</h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        {...register('title', { required: 'Title is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Min Rent</label>
                    <input
                        type="number"
                        {...register('minRent', { required: 'Min Rent is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                    {errors.minRent && <p className="text-red-500 text-sm">{errors.minRent.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Max Rent</label>
                    <input
                        type="number"
                        {...register('maxRent', { required: 'Max Rent is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                    {errors.maxRent && <p className="text-red-500 text-sm">{errors.maxRent.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Beds</label>
                    <input
                        type="number"
                        {...register('bed', { required: 'Beds is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                    {errors.beds && <p className="text-red-500 text-sm">{errors.beds.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Baths</label>
                    <input
                        type="number"
                        {...register('bath', { required: 'Baths is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                    {errors.baths && <p className="text-red-500 text-sm">{errors.baths.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        {...register('location', { required: 'Location is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                    {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Car Spaces</label>
                    <input
                        type="number"
                        {...register('car', { required: 'Car Spaces is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                    {errors.carSpaces && <p className="text-red-500 text-sm">{errors.carSpaces.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Area (sq ft)</label>
                    <input
                        type="number"
                        {...register('area', { required: 'Area is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    />
                    {errors.area && <p className="text-red-500 text-sm">{errors.area.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Property Type</label>
                    <select
                        {...register('propertyType', { required: 'Property Type is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    >
                        <option value="">Select Type</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Condo</option>
                    </select>
                    {errors.propertyType && <p className="text-red-500 text-sm">{errors.propertyType.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Pets Policy</label>
                    <select
                        {...register('petsPolicy', { required: 'Pets Policy is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    >
                        <option value="">Select Policy</option>
                        <option value="allowed">Allowed</option>
                        <option value="not-allowed">Not Allowed</option>
                        <option value="negotiable">Negotiable</option>
                    </select>
                    {errors.petsPolicy && <p className="text-red-500 text-sm">{errors.petsPolicy.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Sort</label>
                    <select
                        {...register('sort', { required: 'Sort option is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                    >
                        <option value="">Select Sort</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="Price: Low to High">Price: Low to High</option>
                        <option value="Price: High to Low">Price: High to Low</option>
                    </select>
                    {errors.sort && <p className="text-red-500 text-sm">{errors.sort.message}</p>}
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

                <div className="col-span-1 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                        className="mt-1 block w-full border rounded-md p-2"
                        rows="4"
                    ></textarea>
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>

                <div className="col-span-1 sm:col-span-2">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Property
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProperties;
