import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Posts from "../Pages/Posts/Posts";
import Contact from "../Pages/Contact/Contact";
import PostDetails from "../Pages/Posts/PostDetails";
import Countries from "../components/countries/Countries";
import Meals from "../Pages/MealDB/Meals";
import MealDetails from "../Pages/MealDB/MealDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/posts",
                loader: async () => fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()),
                element: <Posts />,
            },
            {
                path: "/posts/:id",
                loader: async ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => res.json()),
                element: <PostDetails />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/countries",
                element: <Countries />
            },
            {
                path: "/meals",
                element: <Meals />
            },
            {
                path: "/meals/:id",
                loader: async () => fetch(`../../public/food.json`).then(res => res.json()), // Adjust the URL as needed
                element: <MealDetails />
            }

        ]
    },
]);

export default router;
