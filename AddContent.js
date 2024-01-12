import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useAddContentMutation } from '../../redux/services/contentsApi/contentsApi'
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';

const AddContent = () => {
  const [content, setContent] = useState(null)
  const [addContent] = useAddContentMutation()
  const [isEditorEmpty, setIsEditorEmpty] = useState(true)
  const navigate = useNavigate();

  const handleData = (event, editor) => {
    const data = editor.getData()
    setContent(data)
    setIsEditorEmpty(data.length === 0)
  }

  const validationSchema = yup.object({
    content: yup.string().required('Content is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

const onSubmit = async (data) => {
  const contentData = { ...data, editorData: content };
  const res = await addContent(contentData);
  console.log(res);

  if (res.error) {
    alert(res.error.data.message);
  } else {
  
    Swal.fire({
      icon: 'success',
      title: 'Content Added!',
      text: 'Your content has been added successfully.',
    }).then(() => {
   
      navigate('/sitesettings'); 
    });
  }
};


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="border rounded p-4">
        <h4>ADD CONTENT</h4>
        <div className="form-group mb-3 col-md-6">
          <label className="form-label">Content Name:</label>
          <input
            type="text"
            id="content"
            className="form-control"
            style={{ borderColor: errors.content ? 'red' : '#ced4da' }}
            {...register('content')}
          />
          {errors.content && <div className="text-danger">{errors.content.message}</div>}
        </div>
        <div className="mt-3">
          <label className="mb-2">Content:</label>
          <CKEditor editor={ClassicEditor} style={{ height: '200px' }} onChange={handleData} />
        </div>
        <button className="btn btn-primary my-3" onClick={handleSubmit} disabled={isEditorEmpty}>
          Submit
        </button>
      </form>
    </>
  )
}

export default AddContent
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="d-flex flex-column align-items-center">
        <h2 className="mb-4">Login</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter your username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      <img src="your-image-url.jpg" alt="Login Image" className="ml-5" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default Login;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border rounded p-4">
        <div className="d-flex justify-content-center align-items-center">
          <form className="d-flex flex-column align-items-center">
            <h2 className="mb-4">Login</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter your username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>

          <img src="your-image-url.jpg" alt="Login Image" className="ml-4" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Login;

