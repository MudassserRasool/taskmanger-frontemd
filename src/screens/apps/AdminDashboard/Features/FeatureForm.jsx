import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToastNotification from '../../../../components/ToastNotification/ToastNotification';
import Button from '../../../../components/ui/Button';
import Card from '../../../../components/ui/Card';
import InputField from '../../../../components/ui/InputField';
import {
  useCreateFeatureMutation,
  useUpdateFeatureMutation,
} from '../../../../redux/features/subscriptionFeatures/subscriptionFeatures';

const FeatureForm = ({ data }) => {
  console.log(data, 'data');
  const [values, setValues] = useState(data);
  const [createFeature] = useCreateFeatureMutation();
  const [updateFeature] = useUpdateFeatureMutation();
  const navigate = useNavigate();
  // updateFeature({ id: 1, title: 'new title' });

  const onChange = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handelSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = data?.id
        ? await updateFeature({ id: data?.id, data: values })
        : await createFeature(values);
      console.log(response);
      if (response.error) {
        ToastNotification.error(response?.error?.data?.message);
      } else if (response.data.status === 'success') {
        ToastNotification.success(response.data.message);
        navigate('/admin-dashboard/subscription-features');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        handelSubmitForm(e);
      }}
    >
      <Card
        title={`${data?.id ? 'Edit' : 'Create'} Feature`}
        className="space-y-3"
      >
        <InputField
          // icon={<FaMoneyBills />}
          name="title"
          value={values?.title}
          onChange={onChange}
          placeholder="Feature Name"
          type="string"
          className={`w-full`}
        />
        <InputField
          // icon={<FaMoneyBills />}
          name="description"
          value={values?.description}
          onChange={onChange}
          placeholder="Feature Description"
          type="string"
          className={`w-full`}
        />
        <InputField
          // icon={<FaMoneyBills />}
          name="amount"
          value={values?.amount}
          onChange={(key, value) => onChange(key, Number(value))}
          placeholder="Feature price"
          type="number"
          className={`w-full`}
        />
        <Button type="submit" className="mt-3 !bg-green-400">
          Save
        </Button>
      </Card>
    </form>
  );
};

export default FeatureForm;
