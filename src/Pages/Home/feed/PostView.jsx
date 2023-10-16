import React, { Suspense } from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import FeedCard from "./FeedCard";
import TopBar from "./TopBar";
import { useSelector } from "react-redux";
import CommentSection from "./CommentSection";
import LikeSection from "./LikeSection";

const PostView = () => {
  const params = useParams();
  const { [params.postId]: post } = useSelector((state) => state.feed);
  const { _id } = useSelector((state) => state.auth);
  if (!post) {
    return <div>Error Occured</div>;
  }
  return (
    <>
      <TopBar title="View Post" />
      <FeedCard post={post} id={_id} />
      <LikeSection likesFrom={post.likes} />
      <CommentSection postId={post._id} replies={post.replies} />
    </>
  );
};

export default PostView;
