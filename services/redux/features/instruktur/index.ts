import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const  ROOT_API = process.env.NEXT_PUBLIC_API
import {RootAPI} from '../../config'
import { IInstructor,IQueryParams } from '../../../data-types/instructor'


export const instructor = createApi({
  reducerPath:'instructor',
  baseQuery:fetchBaseQuery({baseUrl:RootAPI}),
  endpoints: (builder) => {
    return {
      getInstructor: builder.query<IInstructor,IQueryParams|void>({
      query({page,limit}:IQueryParams){
        return `/instructor?page=${page}&limit=${limit}`
      }
    }),
    getDetailInstructor:builder.query<any,number>({
      query:(id) => `/instructor/${id}`
    }),
  }
},
})

export const { useGetInstructorQuery,useGetDetailInstructorQuery } = instructor