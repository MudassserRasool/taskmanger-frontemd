import apiSlice from '../../apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: '/user/register',
        method: 'POST',
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

// how to sue useBlockUserMutation
// const { mutate, isLoading } = useBlockUserMutation();
// mutate({ id: 1, isBlocked: true });

// how to use useGetUsersQuery
// const { data, error, isLoading } = useGetUsersQuery({ page: 1, limit: 10 });
