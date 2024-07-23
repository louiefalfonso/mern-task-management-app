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
  }),
});

export const { useUpdateUserMutation, useGetTeamListsQuery} = userApiSlice;

