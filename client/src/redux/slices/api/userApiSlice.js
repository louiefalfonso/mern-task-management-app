import { apiSlice } from "../apiSlice";
const USER_URL = "/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),
    getTeamLists: builder.query({
      query: (data) => ({
        url: `${USER_URL}/get-team`,
        method: "GET",
        body: data,
        credentials: "include",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
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
    getNofitication: builder.query({
      query: () => ({
        url: `${USER_URL}/notifications`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useUpdateUserMutation, useGetTeamListsQuery, useDeleteUserMutation, useUserActionMutation, useGetNofiticationQuery} = userApiSlice;

