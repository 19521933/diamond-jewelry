import { useState, useEffect } from "react";
import CommentForm from "./CommentForm.js";
import Comment from "./Comment.js";
import './comment.css';
import axios from 'axios';
import ls from 'local-storage';
import Swal from 'sweetalert2';

const Comments = ({ productId }) => {
  const [commentList, setCommentList] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  const userId = ls.get("userId");
  const accessToken = ls.get("accessToken");

  async function fetchData() {
    const response = await axios({
      method: 'get',
      url: process.env.REACT_APP_API_URL + '/ratings/productId', 
      params: {productId: productId}
    });
    setCommentList(response.data);
}

  const addComment = async (text) => {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + '/ratings',
      {
        userId: userId,
        productId: productId,
        ratingStar: 0,
        content: text
      },
      {headers: {'Authorization': 'Bearer ' + accessToken}});
    fetchData();
    setActiveComment(null);
  };

  const updateComment = async (text, ratingStar, commentId) => {
    const response = await axios.put(
      process.env.REACT_APP_API_URL + `/ratings`,
      {
        id: commentId,
        userId: userId,
        productId: productId,
        ratingStar: ratingStar,
        content: text
      },
      {headers: {'Authorization': 'Bearer ' + accessToken}});
    fetchData();
    setActiveComment(null);
  };

  const deleteComment = async (commentId) => {
    const result = await Swal.fire({
      title: 'Bạn có muốn xóa bình luận của bạn hay không?',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: `Hủy`,
      confirmButtonColor: "#d33",
      padding: "2em"
    });
    if (result.isConfirmed) {
      const response = await axios({
        method: 'delete',
        url: process.env.REACT_APP_API_URL + `/ratings/${commentId}`,
        headers: {'Authorization': 'Bearer ' + accessToken}
      });
      fetchData();
    }
  };
  
  const hasCommented = () => {
    if (userId === null) {
      return false;
    }
    for (let comment of commentList) {
      if (userId === comment.userId)
        return true;
    }
    return false;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Các bình luận</h3>
      <div className="comment-form-title">{hasCommented() ? 'Bạn đã bình luận về sản phẩm.' : 'Viết bình luận của bạn:'}</div>
      {!hasCommented() && <CommentForm submitLabel="Bình luận" handleSubmit={addComment} />}
      <div className="comments-container">
        {commentList.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;