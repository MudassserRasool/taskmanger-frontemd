import apiSlice from '../../apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get user profile
    getProfile: builder.query({
      query: () => ({
        url: '/profile',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetProfileQuery } = authApi;

// how to use useGetProfileQuery
// const { data, error, isLoading } = useGetProfileQuery();
