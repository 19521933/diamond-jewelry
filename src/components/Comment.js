import CommentForm from "./CommentForm";
import ReactStars from "react-rating-stars-component";
import React from "react";
import './comment.css';
import ls from 'local-storage';

const Comment = ({
  comment,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment
}) => {
  const userId = ls.get("userId");

  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const canDelete =
    userId === comment.userId;
  const canEdit = 
    userId === comment.userId;

  const ratingChanged = (newRating) => {
    updateComment(comment.content, newRating, comment.id);
  };

  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <img src="/user-icon.png" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.userName}</div>
          <div>{comment.createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.content}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Cập nhật"
            hasCancelButton
            initialText={comment.content}
            handleSubmit={(text) => updateComment(text, comment.ratingStar, comment.id)}
            handleCancel={() => setActiveComment(null)}
          />
        )}
        <div className="comment-actions">
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Sửa 
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Xóa
            </div>
          )}
        </div>
        <ReactStars  className="star-rating"
              value={comment.ratingStar}
              count={5}
              edit={userId === comment.userId}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
      </div>
    </div>
  );
};

export default Comment;