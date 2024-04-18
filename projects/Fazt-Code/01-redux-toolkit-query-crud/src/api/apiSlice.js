import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000", //ruta completa
  }), //lo mismo que usar axios
  endpoints: (builder) => ({
    //builder para mirar cuales traen datos y cuales mutan
    //get -> trae datos
    //put, post, delete -> mutan datos
    getTasks: builder.query({
      query: () => "/task", //subruta
    }),
  }),
});

export const { useGetTasksQuery } = apiSlice;
