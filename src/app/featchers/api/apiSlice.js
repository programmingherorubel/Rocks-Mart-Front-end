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
            query: ({ filtercategory, filter, searchByShop }) => {
              return `/products?title=${filtercategory}&filter=${filter}&searchByShop=${searchByShop}`;
            }
          }),

        getCategory: builder.query({
            query: () => "/category",
        }),

        getSingleCategory: builder.query({
            query: (title) => `/category/${title}`,
        }),

        getProduct:builder.query({
            query: ()=> '/products/all'
        }),
       


    }),
});



export const { useGetnavbarQuery, useGetCategoryQuery,useGetProductQuery ,useGetSingleCategoryQuery ,useGetAllProductsQuery} = apiSlice