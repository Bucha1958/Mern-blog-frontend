import { useState } from 'react';
import {Navigate} from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

const CreatePostPage = () => {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);


  const createNewPost = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    //data.set('file', files[0]);
    if (files.length > 0) {
      data.append('file', files[0]);
    }
    
    
    const response = await fetch('https://mern-blog-backend-0o00.onrender.com/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return ( 
    <form onSubmit={createNewPost}>
      <input type="title" 
        placeholder={'Title'} 
        value={title}
        onChange={ev => setTitle(ev.target.value)}  
      />
      <input type="summary" 
        placeholder={'Summary'} 
        value={summary}
        onChange={ev => setSummary(ev.target.value)}  
      />
      <input type="file"
        //value={files}
        onChange={ev => setFiles(ev.target.files)}
      />
      <ReactQuill 
        value={content}  
        modules={modules} 
        formats={formats} 
        onChange={newValue => setContent(newValue)}
      />
      <button style={{marginTop: '10px'}}>Create Post</button>
    </form>
  );
}
 
export default CreatePostPage;