import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTaskQuery } from '../../../../redux/features/taskManger/taskMangerApi';
import TaskForm from './TaskForm';

const EditTask = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetTaskQuery(id);
  return (
    <div>
      {error && <p>Error</p>}
      {isLoading && <p>Loading...</p>}
      <TaskForm data={data?.data} />
    </div>
  );
};

export default EditTask;
