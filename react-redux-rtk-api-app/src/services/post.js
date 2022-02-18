import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
          url : 'posts',
          method:'GET'
      })
    }),
    getPostById: builder.query({
      query: (id) => ({
          url : `posts/${id}`,
          method:'GET'
      })
    }),
    getPostByLimit: builder.query({
      query: (num) => ({
          url : `posts?_limit=${num}`,
          method:'GET'
      })
    }),
    deletePost: builder.mutation({
      query: (id) => {
        console.log("Delete ID :", id)
        return {
          url : `posts/${id}`,
          method:'DELETE'
        }
      }
    }),
    CreatePost: builder.mutation({
      query: (newPost) => {
        console.log("Create Post :", newPost)
        return {
          url : `posts`,
          body: newPost,
          method:'POST',
          header:{'Content-type':'application/json; charset=UTF-8',
        }
        }
      }
    }),
    UpdatePost: builder.mutation({
      query: (UpdatedPostData) => {
        console.log("Update Post :", UpdatedPostData)
        const {id , ...data} = UpdatedPostData
        console.log("Update Post :", id)
        console.log("Update Post :", data)
        return {
          url : `posts/${id}`,
          body: data,
          method:'PUT',
          header:{'Content-type':'application/json; charset=UTF-8',
        }
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation,useUpdatePostMutation} = postApi