// import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Home from "../Components/Home";
import Countries from "../Components/Countries";
import CountryInfo from "../Components/CountryInfo";
import ErrorPage from "../Components/ErrorPage";
 

    const customRoutes = createBrowserRouter([
        {
          path: "/",
          element: <Home></Home>,
          errorElement: <ErrorPage></ErrorPage>,
          children:
          [
            {
                path: "/countries",
                loader: async () => fetch("https://restcountries.com/v3.1/all"),
                element: <Countries></Countries>
            },
            {
                path: "/countries/countryinfo",
                element: <CountryInfo></CountryInfo>
            }

          ]
        }
      ]);


export default customRoutes;