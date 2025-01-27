import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaMoneyBills } from 'react-icons/fa6';
import { MdAccessTime } from 'react-icons/md';
import { TiBusinessCard } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../../../components/ui/Button';
import Card from '../../../../components/ui/Card';
import InputGroup from '../../../../components/ui/InputField';
import SelectOptions from '../../../../components/ui/SelectOptions';

const SubscriptionForm = ({ data }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState(data);
  const onChange = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API = data?._id;
      // ? editSubscription({ id: data?._id, data: values })
      // : createSubscription(values);
      const result = await API;
      if (result?.data?.success) {
        toast.success(result?.data?.message);
        navigate('/admin/subscriptions');
      } else {
        toast.error(result?.error?.data?.message);
      }
    } catch (error) {
      //   console.error(error);
    }
  };
  return (
    <form>
      <Card
        title="Create New Subscription"
        content={
          <Button
            link="/admin-dashboard/subscriptions"
            className="flex items-center gap-2 !bg-green-500 !py-1.5"
          >
            Subscriptions
          </Button>
        }
        className="space-y-3"
      >
        <SelectOptions
          icon={<FaPen />}
          name="subscriptionType"
          value={values?.subscriptionType}
          onChange={onChange}
          placeholder="Select Subscription Plan"
          isRequired={true}
          options={[
            { label: 'Basic', value: 'basic' },
            { label: 'Standard', value: 'standard' },
            { label: 'Premium', value: 'premium' },
          ]}
        />

        <InputGroup
          icon={<FaMoneyBills />}
          name="monthlyPrice"
          value={values?.monthlyPrice}
          onChange={onChange}
          placeholder="MonThly Price"
          type="number"
        />

        <InputGroup
          name="yearlyPrice"
          value={values?.yearlyPrice}
          onChange={onChange}
          placeholder="Yearly Price"
          type="number"
          icon={<FaMoneyBills />}
        />

        <SelectOptions
          icon={<MdAccessTime />}
          name="trail"
          value={values?.trail}
          onChange={onChange}
          placeholder="Select trail time"
          options={[
            { label: '1 week', value: '1 week' },
            { label: '2 weeks', value: '2 weeks' },
            { label: '3 weeks', value: '3 weeks' },
            { label: '4 weeks', value: '4 weeks' },
          ]}
        />

        <SelectOptions
          icon={<TiBusinessCard />}
          name="cardLimitNum"
          value={values?.cardLimitNum}
          onChange={onChange}
          placeholder="Select card number"
          options={[
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
            { label: '4', value: 4 },
            { label: '5', value: 5 },
          ]}
        />

        <Button type="submit" className="mt-3 !bg-green-400">
          Save
        </Button>
      </Card>
    </form>
  );
};

export default SubscriptionForm;
