import apiSlice from '../../apiSlice';

export const taskMangerApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: '/task',
        method: 'GET',
      }),
      providesTags: ['taskManger'],
    }),

    // create task
    createTask: builder.mutation({
      query: (body) => ({
        url: '/task',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['taskManger'],
    }),

    // update task
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/task/${id}`,
        method: 'PUT',
        body: data,
      }),
      // invalidatesTags: (result, error, { id }) => [{ type: 'taskManger', id }],

      invalidatesTags: (result, error, { id }) => [
        { type: 'taskManger', id },
        'taskManger',
      ],
    }),

    // get single task
    getTask: builder.query({
      query: (id) => ({
        url: `/task/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'taskManger', id }],
    }),

    // delete task
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['taskManger'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useGetTaskQuery,
  useDeleteTaskMutation,
} = taskMangerApi;

// how to use useGetTasksQuery
// const { data, error, isLoading } = useGetTasksQuery();

// how to use useCreateTaskMutation
// const [createTask, { isLoading }] = useCreateTaskMutation();

// how to use useUpdateTaskMutation
// const [updateTask, { isLoading }] = useUpdateTaskMutation();

// how to use useGetTaskQuery
// const { data, error, isLoading } = useGetTaskQuery(id);

// how to use useDeleteTaskMutation

// const [deleteTask, { isLoading }] = useDeleteTaskMutation();
