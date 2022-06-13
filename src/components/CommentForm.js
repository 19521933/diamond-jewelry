import { useState } from "react";
import './comment.css';
import ls from 'local-storage';
import Swal from 'sweetalert2';

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const userId = ls.get('userId');

  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    if (userId === null) {
      Swal.fire({
				icon: 'info',
				title: 'Yêu cầu đăng nhập',
				text: 'Bạn cần đăng nhập để thực hiện chức năng bình luận',
			});
    }
    else {
      handleSubmit(text);
      setText("");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Hủy
        </button>
      )}
    </form>
  );
};

export default CommentForm;