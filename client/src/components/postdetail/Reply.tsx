import styled from "styled-components";
import type { CommentType } from "./Comment";
import { deleteComment } from "../../api/axios";

export interface ReplyProps {
   comment: CommentType;
}

function Reply({ comment }: ReplyProps) {
   const handleDelete = async () => {
      const response = await deleteComment(comment.commentId);
      if (response) {
         console.log("대댓글 삭제 성공");
      } else {
         console.log("대댓글 삭제 실패");
      }
   };

   const commentDate = comment.createdAt.slice(0, 10);
   const commentTime = comment.createdAt.slice(12, 16);

   return (
      <ReplyContainer>
         <ReplyBox>
            <ReplyAuthorInfoContainer>
               <ReplyAuthorInfo>
                  <img
                     src={comment.userPhoto}
                     alt="reply-author-img"
                     className="reply-author-img"
                  />
                  <span className="reply-author">{comment.nickname}</span>
               </ReplyAuthorInfo>
            </ReplyAuthorInfoContainer>
            <ReplyContent>
               <div className="reply-content">{comment.content}</div>
            </ReplyContent>
            <DateAndButton>
               <span className="reply-createdAt">
                  {commentDate} {commentTime}
               </span>
               <ReplyButtonContainer>
                  <button type="submit" className="reply-btn">
                     수정
                  </button>
                  <span>|</span>
                  <button
                     type="submit"
                     className="reply-btn reply-delete-btn"
                     onClick={handleDelete}
                  >
                     삭제
                  </button>
               </ReplyButtonContainer>
            </DateAndButton>
         </ReplyBox>
      </ReplyContainer>
   );
}

export default Reply;

export const ReplyContainer = styled.li`
   width: 100%;
   padding: 10px 0 10px 15px;
   border-bottom: 1px solid var(--light-gray);
`;

export const ReplyBox = styled.div`
   margin-left: 150px;
   display: flex;
   justify-content: space-between;

   .reply-createdAt {
      font-size: 12px;
   }
`;

export const ReplyAuthorInfoContainer = styled.div`
   height: 100%;
`;

export const ReplyAuthorInfo = styled.div`
   display: flex;
   align-items: center;
   width: 140px;

   .reply-author-img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 5px;
   }
   .reply-author {
      font-size: 12px;
   }
`;

export const ReplyContent = styled.div`
   width: 640px;
   height: 100%;
   margin-top: 3px;

   .reply-content {
      font-size: 13px;
   }
`;

export const DateAndButton = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;
   height: 100%;
   font-size: 12px;
   width: 120px;
   margin-top: 3px;
`;

export const ReplyButtonContainer = styled.div`
   display: flex;
   align-items: center;
   margin-top: 5px;

   .reply-btn {
      border: none;
      background-color: transparent;
      font-size: 12px;
      cursor: pointer;
   }

   .reply-delete-btn {
      padding-right: 0;
   }
`;
