import React, { useEffect, useState } from 'react';
import { FaCamera } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getAccessToken } from '../../lib/secureLocalStorage';
import { selectUploadStatus, uploadImage } from '../../redux/feature/service/providerServiceSlice';
import { fetchProfile, fetchUpdateUser, selectUser } from '../../redux/feature/user/userSlice';
import SaveProfileSuccess from './SaveProfileSuccess';

const ProviderProfileSetting = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const uploadStatus = useSelector(selectUploadStatus);

  const [accessToken, setAccessToken] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({
    isSuccess: false,
    errorMessage: '',
    showModal: false
  });

  useEffect(() => {
    const token = getAccessToken(); // Retrieve access token from secure local storage
    setAccessToken(token);
  }, []);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchProfile(accessToken));
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (user && user.avatar) {
      setSelectedImage(user.avatar);
    }
  }, [user]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);

      // Dispatch uploadImage action
      dispatch(uploadImage(file))
        .then((result) => {
          if (uploadImage.fulfilled.match(result)) {
            setSelectedImage(result.payload); // Update selectedImage with the uploaded image URL
          } else {
            console.error('Image upload failed:', result.payload || result.error.message);
          }
        })
        .catch((error) => {
          console.error('Image upload errors:', error);
        });
    }
  };

  const initialValues = {
    companyName: user?.username || '',
    firstName: user?.first_name || '',
    lastName: user?.last_name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dateOfBirth: user?.dob || '',
  };

  const validationSchema = Yup.object({
    companyName: Yup.string().required('Company Name is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const userData = {
      username: values.companyName,
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      dob: values.dateOfBirth,
      avatar: selectedImage, // Use the uploaded image URL
    };

    dispatch(fetchUpdateUser({ token: accessToken, userData })).then(() => {
      // Fetch updated profile after successful update
      dispatch(fetchProfile(accessToken));
      setSubmitStatus({ isSuccess: true, errorMessage: '', showModal: true });
      setSubmitting(false);
    }).catch((error) => {
      console.error('Error updating user:', error);
      setSubmitStatus({ isSuccess: false, errorMessage: 'Failed to update profile. Please try again.', showModal: true });
      setSubmitting(false);
    });
  };

  const closeModal = () => {
    setSubmitStatus({ ...submitStatus, showModal: false });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='max-w-md mx-auto p-4'>
      <h2 className='text-center text-2xl font-bold mb-6'>Profile Settings</h2>
      <div className='flex flex-col items-center mb-6'>
        <div className='relative w-24 h-24 bg-Secondary rounded-full flex justify-center items-center cursor-pointer'>
          {selectedImage ? (
            <img src={selectedImage} alt="Profile" className='w-24 h-24 rounded-full object-cover' />
          ) : (
            <FaCamera className='text-white text-3xl' />
          )}
          <input
            type='file'
            accept='image/*'
            className='absolute inset-0 opacity-0 cursor-pointer'
            onChange={handleImageChange}
          />
        </div>
        <span className='text-center text-gray-700 mt-2'>Add Photo</span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='space-y-4'>
            <div>
              <label className='block text-gray-700'>Company Name</label>
              <Field type='text' name='companyName' className='w-full p-2 border rounded-md' />
              <ErrorMessage name='companyName' component='div' className='text-red-500 text-sm' />
            </div>
            <div className='flex space-x-4'>
              <div className='flex-1'>
                <label className='block text-gray-700'>First Name</label>
                <Field type='text' name='firstName' className='w-full p-2 border rounded-md' />
                <ErrorMessage name='firstName' component='div' className='text-red-500 text-sm' />
              </div>
              <div className='flex-1'>
                <label className='block text-gray-700'>Last Name</label>
                <Field type='text' name='lastName' className='w-full p-2 border rounded-md' />
                <ErrorMessage name='lastName' component='div' className='text-red-500 text-sm' />
              </div>
            </div>
            <div>
              <label className='block text-gray-700'>Email</label>
              <Field type='email' name='email' className='w-full p-2 border rounded-md' />
              <ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
            </div>
            <div className='flex space-x-4'>
              <div className='flex-1'>
                <label className='block text-gray-700'>Phone</label>
                <Field type='text' name='phone' className='w-full p-2 border rounded-md' />
                <ErrorMessage name='phone' component='div' className='text-red-500 text-sm' />
              </div>
              <div className='flex-1'>
                <label className='block text-gray-700'>Date of Birth</label>
                <Field type='date' name='dateOfBirth' className='w-full p-2 border rounded-md' />
                <ErrorMessage name='dateOfBirth' component='div' className='text-red-500 text-sm' />
              </div>
            </div>
            <div className='text-center'>
              <button type='submit' className='bg-Secondary text-white px-4 py-2 rounded-md' disabled={isSubmitting}>
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <SaveProfileSuccess
        show={submitStatus.showModal}
        onClose={closeModal}
        title={submitStatus.isSuccess ? 'Success' : 'Error'}
        message={submitStatus.isSuccess ? 'Profile updated successfully.' : submitStatus.errorMessage}
      />
    </div>
  );
};

export default ProviderProfileSetting;
