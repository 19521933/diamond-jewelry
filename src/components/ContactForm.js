import React from "react";
import styles from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { FormatItalic, FormatLineSpacing } from "@material-ui/icons";
import Swal from 'sweetalert2';

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      content: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 character or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      content: Yup.string().required("Required"),
    }),
  });

  const handleForm = async (event) => {
    event.preventDefault();
    const response = await axios({
      method: 'post',
      url: process.env.REACT_APP_API_URL + `/contacts`,
      data: {
        senderName: formik.values.name,
        senderEmail: formik.values.email,
        content: formik.values.content 
      }
    });
    if (response.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Thành công',
        text: 'Gửi thông tin liên hệ thành công',
        });
    }
    formik.setValues({
      name: "",
      email: "",
      content: "",
    });
  };

  return (
    <section>
      <form className={styles.contactform}>
        <label>HỌ VÀ TÊN</label>
        <input
          type="text"
          ìd="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <p className="err-mes">{formik.errors.name}</p>}
        <label>EMAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <p className="err-mes">{formik.errors.email}</p>
        )}
        <label>VẤN ĐỀ GẶP PHẢI HOẶC LỜI NHẮN</label>
        <textarea
          type="text"
          id="content"
          name="content"
          className={styles.content}
          value={formik.values.content}
          onChange={formik.handleChange}
        />
        {formik.errors.content && (
          <p className="err-mes">{formik.errors.content}</p>
        )}
        <button
          appearance="primary"
          onClick={handleForm}
          disabled={
            formik.errors.name || formik.errors.email || !formik.values.content
          }
        >
          Gửi đi{" "}
          <span>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </button>
      </form>
    </section>
  );
}
