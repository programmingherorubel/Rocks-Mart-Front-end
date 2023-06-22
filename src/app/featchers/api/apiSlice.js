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
            query: (info) => `/products?title=${info.filtercategory}&filter=${info.filter}`
        }),

        getCategory: builder.query({
            query: () => "/category",
        }),

        getSingleCategory: builder.query({
            query: (title) => `/category/${title}`,//?hello=${hello}
        }),



    }),
});



export const { useGetnavbarQuery, useGetCategoryQuery, useGetSingleCategoryQuery ,useGetAllProductsQuery} = apiSlice