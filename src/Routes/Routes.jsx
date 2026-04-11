import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPages from '../pages/ErrorPage/ErrorPages';
import Home from '../pages/Home/Home';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPages></ErrorPages>,
        HydrateFallback: () => null,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                path: "/",
                Component: Home
            }
        ]
    },
]);