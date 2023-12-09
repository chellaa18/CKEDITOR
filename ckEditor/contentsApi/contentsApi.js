
// contentApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contentApi = createApi({
  reducerPath: 'contentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    addContent: builder.mutation({
      query: (contentData) => ({
        url: 'admin/contents',
        method: 'POST',
        body: contentData,
      }),
      providesTags: (result, error, contentData) => [{ type: 'Admin', id: 'Contents' }],
    
      invalidatesTags: [{ type: 'Admin', id: 'Contents' }],
    }),
    getContent: builder.query({
      query: () => 'admin/getcontents',
      providesTags: [{ type: 'Admin', id: 'Contents' }],
    }),
    getContentByID: builder.query({
      query: (id) => `admin/getcontent/${id}`,
      providesTags: [{ type: 'Admin', id: 'Contents' }],
    }),
    updateContentById: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `admin/updatecontent/${id}`,
        method: 'POST',
        body: {updatedData},
      }),
      invalidatesTags: [{ type: 'Admin', id: 'Contents' }],
    }),
  }),
});

export const {
  useAddContentMutation,
  useGetContentQuery,
  useUpdateContentByIdMutation,
  useGetContentByIDQuery
} = contentApi;
