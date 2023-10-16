import React from "react";
import {
  Route,
  defer,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "../Pages/Home";
import Auth from "../Pages/Authentication";
import Services from "../Services";
import { getPostById } from "../Services/getPostById";
import { enqueueSnackbar } from "notistack";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        exact
        path=""
        element={<Home.Landing />}
        errorElement={<Navigate to="/log-in" />}
      />
      <Route element={<Home.Layout />}>
        <Route
          path="profile"
          element={<Home.Profile self />}
          loader={async () => {
            const user = await Services.getMyProfile();
            const feed = await Services.getMyPosts();
            return defer({ feed, user, _id: user._id });
          }}
        />
        <Route
          path="user/:userId"
          element={<Home.Profile />}
          loader={async ({params}) => {
            try {
              const user = await Services.getUserProfileById(params.userId);
              const feed = await Services.getUserPosts(params.userId)
              return defer({ user, feed, _id: user._id });
            } catch (err) {
              enqueueSnackbar("Failed to load user profile.", {
                variant: "error"
              })
              throw new Error(err.message)
            }
          }}
        />
        <Route path="feed" element={<Home.Feed />}>
          <Route path="create" element={<Home.CreatePost />} />
        </Route>
        <Route
          path="post/:postId"
          element={<Home.PostView />}
          errorElement={(err) => {
            <div>{err}</div>;
          }}
          loader={async ({ params }) => {
            const response = await getPostById(params.postId);
            return defer({ response });
          }}
        />
      </Route>
      <Route element={<Auth.Layout />}>
        <Route path="log-in" element={<Auth.LogIn />} />
        <Route path="registration" element={<Auth.Registration />} />
      </Route>
    </>
  )
);
const RootRouting = () => {
  return <RouterProvider router={router} />;
};

export default RootRouting;
