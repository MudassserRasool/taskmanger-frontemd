import React from 'react';
import { FaPencilAlt, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ToastNotification from '../../../../components/ToastNotification/ToastNotification';
import Card from '../../../../components/ui/Card';
import {
  useDeleteFeatureMutation,
  useGetFeaturesQuery,
} from '../../../../redux/features/subscriptionFeatures/subscriptionFeatures';
const AllSubscriptions = () => {
  const { data, error, isLoading } = useGetFeaturesQuery();
  const navigate = useNavigate();
  const [deleteFeature] = useDeleteFeatureMutation();
  const handelDeleteFeature = async (id) => {
    try {
      const response = await deleteFeature(id);
      if (response.error) {
        ToastNotification.error(response?.error?.data?.message);
        return;
      } else if (response.data.statusCode === 200) {
        ToastNotification.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      title="All Features"
      content={
        <button
          className="rounded bg-[#009ef7] px-4 py-2 text-white flex items-center gap-2"
          onClick={() => {
            navigate('/admin-dashboard/subscription-features/create');
          }}
        >
          <FaPlus /> Create Feature
        </button>
      }
    >
      <div className="max-w-sm rounded-lg shadow-lg bg-white p-6">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Pro Plan</h2>
          {/* edit */}
          <button
            onClick={() => {
              navigate('/admin-dashboard/subscriptions/edit/1');
            }}
          >
            <FaPencilAlt />
          </button>
        </div>
        <div className="flex items-center mb-6">
          <span className="text-4xl font-extrabold text-gray-800">$29</span>
          <span className="text-lg text-gray-500 ml-2">/ month</span>
        </div>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Unlimited projects
          </li>
          <li className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Priority support
          </li>
          <li className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Free updates
          </li>
        </ul>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </div>
    </Card>
  );
};

export default AllSubscriptions;
