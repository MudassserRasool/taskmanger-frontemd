import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ToastNotification from '../../../../components/ToastNotification/ToastNotification';
import Button from '../../../../components/ui/Button';
import Card from '../../../../components/ui/Card';
import InputField from '../../../../components/ui/InputField';
import {
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from '../../../../redux/features/taskManger/taskMangerApi';

const TaskForm = ({ data }) => {
  console.log(data, 'data');
  const [values, setValues] = useState();
  const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const navigate = useNavigate();

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
        ? await updateTask({ id: data?.id, data: values })
        : await createTask(values);
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

  useEffect(() => {
    setValues(data);
  }, [data]);

  return (
    <form
      onSubmit={(e) => {
        handelSubmitForm(e);
      }}
    >
      <Card
        title={`${data?.id ? 'Edit' : 'Create'} Task`}
        className="space-y-3"
      >
        <InputField
          name="title"
          value={values?.title}
          onChange={onChange}
          placeholder="Task Title"
          type="string"
          className={`w-full`}
        />
        <InputField
          name="description"
          value={values?.description}
          onChange={onChange}
          placeholder="Task Description"
          type="string"
          className={`w-full`}
        />

        <Button type="submit">Save</Button>
      </Card>
    </form>
  );
};

export default TaskForm;
