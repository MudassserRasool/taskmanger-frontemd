import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';
import ToastNotification from '../../../../components/ToastNotification/ToastNotification';
import Button from '../../../../components/ui/Button';
import Card from '../../../../components/ui/Card';
import {
  useDeleteTaskMutation,
  useGetTasksQuery,
} from '../../../../redux/features/taskManger/taskMangerApi';

const AllTasks = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetTasksQuery();

  // useEffect(() => {
  //   if (token) {
  //     refetch();
  //   }
  // }, [token]);

  const [deleteTask] = useDeleteTaskMutation();

  const handelDelete = async (id) => {
    try {
      const response = await deleteTask(id).unwrap();
      if (response.error) {
        return ToastNotification.error(response.error.data.message);
      }
      console.log(response);
      ToastNotification.success(response?.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleConfirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this task?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handelDelete(id),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };
  return (
    <Card
      title={'All Tasks'}
      content={
        <Button onClick={() => navigate('/user-dashboard/tasks/create')}>
          Create Task
        </Button>
      }
    >
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data &&
        data.data.map((task) => (
          <div key={task.id} className="flex border p-4 my-2">
            <div>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
            </div>
            {/* edit and delete button */}
            <div className="ml-auto gap-2 flex flex-col">
              <Button
                onClick={() =>
                  navigate(`/user-dashboard/tasks/edit/${task.id}`)
                }
              >
                Edit
              </Button>
              <Button onClick={() => handleConfirmDelete(task.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
    </Card>
  );
};

export default AllTasks;
