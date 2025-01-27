import apiSlice from '../../apiSlice';

export const subscriptionFeaturesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get user features
    getFeatures: builder.query({
      query: () => ({
        url: '/feature',
        method: 'GET',
      }),
      providesTags: ['subscriptionFeatures'],
    }),

    // create feature
    createFeature: builder.mutation({
      query: (body) => ({
        url: '/feature',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['subscriptionFeatures'],
    }),

    // update feature
    updateFeature: builder.mutation({
      query: ({ id, data }) => ({
        url: `/feature/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['subscriptionFeatures'],
    }),

    // get single feature
    getFeature: builder.query({
      query: (id) => ({
        url: `/feature/${id}`,
        method: 'GET',
      }),
    }),

    // delete feature
    deleteFeature: builder.mutation({
      query: (id) => ({
        url: `/feature/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['subscriptionFeatures'],
    }),
  }),
});

export const {
  useGetFeaturesQuery,
  useCreateFeatureMutation,
  useUpdateFeatureMutation,
  useGetFeatureQuery,
  useDeleteFeatureMutation,
} = subscriptionFeaturesApi;

// how to use useGetFeatureQuery
