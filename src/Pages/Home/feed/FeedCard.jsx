import React from "react";
import styled from "@emotion/styled";
import { BaseURL } from "../../../Services/constants";
import { useNavigate } from "react-router-dom";
import Like from "./Action/Like";
import Reply from "./Action/Reply";
import UserFeedCardHeader from "./UserFeedCardHeader";
import humanDate from 'human-date'
/**
 * @typedef {object} ReplyProps
 * @property {number} userId
 * @property {string} text
 * @property {string} userProfilePic
 * @property {string} username
 * 
 * @typedef {object} PostProps
 * @property {string} _id
 * @property {string} postedBy
 * @property {string} text
 * @property {string} img
 * @property {Array.<number>} likes
 * @property {Array.<ReplyProps>} replies
 * @property {string} createdAt
 * @property {string} updatedAt
 * @property {number} __v
 * 
 * @typedef {object} FeedCardProps
 * @property {PostProps} post
 * @property {string} id
 *
 * @param {FeedCardProps} props
 * @returns
 */
const FeedCard = (props) => {
  const { post, id } = props
  const imageUrl = BaseURL + post.img;
  const navigate = useNavigate();
  
  const handleClick = () => {
    const postUrl = "/post/" + post._id;
    navigate(postUrl);
  };
  return (
    <Container>
      <UserFeedCardHeader id={post.postedBy} userId={id} />
      <Wrapper onClick={handleClick}>
        <Image src={imageUrl} />
        <Text>{post.text}</Text>
      </Wrapper>
      <ActionsContainer>
        <Like likesFrom={post.likes} postId={post._id} />
        <Reply replies={post.replies} />
        <DateTimeText>{humanDate.relativeTime(post.createdAt)}</DateTimeText>
      </ActionsContainer>
    </Container>
  );
};

export default FeedCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: white;
  border-radius: 8px;
  padding: 8px 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Image = styled.div`
  display: block;
  width: 100%;
  height: auto;
  min-height: 700px;
  position: relative;
  background-image: ${(props) => `url("${props.src}")`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.2s ease;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-align: justify;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
`
const DateTimeText = styled.div`
  flex: 1;
  text-align: right;
  color: #888888;
`
