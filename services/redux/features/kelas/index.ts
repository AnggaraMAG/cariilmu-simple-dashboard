import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const  ROOT_API = process.env.NEXT_PUBLIC_API
import {RootAPI} from '../../config'
import { IKelas,IQueryParams } from '../../../data-types/kelas'


export const kelas = createApi({
  reducerPath:'kelas',
  baseQuery:fetchBaseQuery({baseUrl:RootAPI}),
  endpoints: (builder) => {
    return {
      getKelas: builder.query<IKelas,IQueryParams|void>({
      query({page,limit}:IQueryParams){
        return `/course?page=${page}&limit=${limit}`
      }
    }),
    getDetailKelas:builder.query<any,number>({
      query:(id) => `/course/${id}`
    }),
  }
},
})

export const { useGetKelasQuery,useGetDetailKelasQuery } = kelas