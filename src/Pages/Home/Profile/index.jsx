import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { Await, useLoaderData } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import FeedCard from "../feed/FeedCard";
import ProfileView from "./ProfileView";

/**
 * @typedef {object} ProfileProps
 * @property {boolean} self
 *
 * @param {ProfileProps} props
 * @returns
 */
const Profile = (props) => {
  const { feed, _id, user } = useLoaderData();
  return (
    <>
      <Suspense
        fallback={
          <Container>
            <Spinner />
          </Container>
        }
      >
        <Await
          resolve={user}
          errorElement={<div>Failed to display user profile.</div>}
          children={(user) => (
            <Container>
              <ProfileView user={user} self={props.self} />
            </Container>
          )}
        />
      </Suspense>
      <Suspense
        fallback={
          <Container>
            <Spinner />
          </Container>
        }
      >
        <Await
          resolve={feed}
          errorElement={<div>Error Occured</div>}
          children={(feed) => {
            if (feed.length === 0) {
              return <div>No posts done by you.</div>;
            } else {
              return feed.map((post) => (
                <FeedCard key={post._id} post={post} id={_id} />
              ));
            }
          }}
        />
      </Suspense>
    </>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: whitesmoke;
  border-radius: 8px;
  padding: 16px 0px;
`;
