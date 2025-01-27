import apiSlice from '../../apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login',
        method: 'POST',
        body: credentials,
      }),
      // invalidatesTags: ['users'],
    }),

    // get all users with filters and pagination
    getUsers: builder.query({
      query: (params) => ({
        url: `/user`,
        method: 'GET',
        params,
      }),
      providesTags: ['users'],
    }),

    // block or unblock user
    blockUser: builder.mutation({
      query: ({ id, data }) => {
        console.log(data, id, 'Inside api');
        return {
          url: `/user/${id}`,
          method: 'PUT',
          body: { isBlocked: data },
        };
      },
      invalidatesTags: ['users'],
    }),
  }),
});

export const { useLoginMutation, useGetUsersQuery, useBlockUserMutation } =
  authApi;

// how to sue useBlockUserMutation
// const { mutate, isLoading } = useBlockUserMutation();
// mutate({ id: 1, isBlocked: true });

// how to use useGetUsersQuery
// const { data, error, isLoading } = useGetUsersQuery({ page: 1, limit: 10 });
