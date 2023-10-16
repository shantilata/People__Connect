import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import {
  Await,
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import FeedCard from "./FeedCard";
import { useSelector } from "react-redux";
const Feed = () => {
  const allPosts = useSelector((state) => state.feed);
  const { _id } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const isExact = pathname === "/feed";
  const posts = Object.values(allPosts)
  //   .sort((a, b) =>
  //   Date(a.updatedAt).localeCompare(Date(b.updatedAt))
  // );
  if (!isExact) {
    return <Outlet />;
  }
  if (posts === null || posts.length === 0) {
    return <div>No posts available in feed.</div>;
  } else {
    return posts.map((post) => (
      <FeedCard key={post._id} post={post} id={_id} />
    ));
  }
};

export default Feed;
