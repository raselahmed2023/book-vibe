import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPages from '../pages/ErrorPage/ErrorPages';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPages></ErrorPages>,
        HydrateFallback: () => null,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
                loader: () => fetch('booksData.json').then(res => res.json()),

            },
            {
                path: "/about",
                Component: About
            },
            {
                path:'/ReadList',
                Component: ReadList

            },
            {
                path: "/bookDetails/:id",
                loader: () => fetch('booksData.json').then(res => res.json()),
                Component: BookDetails
            }
        ]
    },
]);