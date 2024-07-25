import { apiSlice } from "../apiSlice";
const USER_URL = "/user";


export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (data) => ({
        url: `${USER_URL}/users`,
        method: "GET",
        body: data,
        credentials: "include",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/delete/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),
    userAction: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/${data.id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useDeleteUserMutation, useUpdateUserMutation, useUserActionMutation
} = userApiSlice;

