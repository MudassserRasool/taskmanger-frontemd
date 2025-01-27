import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Table from '../../../../components/common/tables/Table';
import ToastNotification from '../../../../components/ToastNotification/ToastNotification';
import Card from '../../../../components/ui/Card';
import {
  useDeleteFeatureMutation,
  useGetFeaturesQuery,
} from '../../../../redux/features/subscriptionFeatures/subscriptionFeatures';
const AllFeatures = () => {
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

  const content = {
    header: [' Name', 'Description', 'Price', 'Actions'], // block or unblock user in actions
    body: data?.data?.map((item) => ({
      rows: [
        {
          row: item?.title,
        },
        {
          row: item?.description,
        },
        {
          row: item?.amount,
        },
        {
          row: (
            <div className="flex items-center gap-4">
              <button
                className="text-[#009ef7] hover:underline"
                onClick={() => {
                  navigate(
                    `/admin-dashboard/subscription-features/edit/${item?.id}`
                  );
                }}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:underline"
                onClick={() => {
                  handelDeleteFeature(item?.id);
                }}
              >
                Delete
              </button>
            </div>
          ),
        },
      ],
    })),
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
      <Table content={content} />
    </Card>
  );
};

export default AllFeatures;
