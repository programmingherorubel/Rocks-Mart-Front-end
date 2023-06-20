import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"



export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    endpoints: (builder) => ({
        getnavbar: builder.query({
            query: () => "/navigation",
        }),

        getAllProducts: builder.query({
            query: (title) => `/products/${title}`,
        }),

        getCategory: builder.query({
            query: () => "/category",
        }),

        getSingleCategory: builder.query({
            query: (title) => `/category/${title}`,
        }),



    }),
});



export const { useGetnavbarQuery, useGetCategoryQuery, useGetSingleCategoryQuery ,useGetAllProductsQuery} = apiSlice