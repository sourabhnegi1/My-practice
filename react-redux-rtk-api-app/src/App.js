import './App.css';
import {useGetAllPostQuery,useGetPostByIdQuery,useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation,useUpdatePostMutation} from './services/post'

function App() {

  const responseInfo = useGetAllPostQuery()
  const responseInfoById = useGetPostByIdQuery(4)
  const responseInfoByLimit = useGetPostByLimitQuery(3)
  const [DeletePost,responseInfoDelete] = useDeletePostMutation()
  const [CreatePost,responseInfoCreate] = useCreatePostMutation()
  const [UpdatePost,responseInfoUpdate] = useUpdatePostMutation()

  const myData = {
    userid: 1,
    body: "This is body",
    Title: "This is title",
  }
  const updatedData = {
    id:1,
    userid: 101,
    body: "This is Updated body",
    Title: "This is Updated title",
  }

  // console.log("RESPONSE INFORMATION", responseInfo);
  // console.log("RESPONSE INFORMATION", responseInfo.data);
  // console.log("RESPONSE INFORMATION", responseInfoById);
  // console.log("RESPONSE INFORMATION", responseInfoById.data);
  // console.log("RESPONSE INFORMATION", responseInfoByLimit);
  // console.log("RESPONSE INFORMATION", responseInfoByLimit.data);
  // console.log("RESPONSE INFORMATION", responseInfoDelete);
  // console.log("RESPONSE INFORMATION", responseInfoDelete.data);

  // console.log("RESPONSE INFORMATION", responseInfoCreate);
  // console.log("RESPONSE INFORMATION", responseInfoCreate.data);

  if(responseInfoCreate.isLoading){
    return (<div> <h1>Loading...</h1> </div>);
  }
  return (
    <div className="App">
      {/* <h1>Redux Tool-kit - getallpost</h1>
      {
        responseInfo.data.map((post,i)=>
          <div key={i}>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        )
      } */}

      {/* <h1>Redux Tool-kit - getaSinglePostById</h1>
      <h2> {responseInfoById.data.id} {responseInfoById.data.title} </h2>
      <p>{responseInfoById.data.body}</p>
      <hr /> */}

      {/* <h1>Redux Tool-kit - getpostbylimit</h1>
      {
        responseInfoByLimit.data.map((post,i)=>
          <div key={i}>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        )
      } */}

        {/* <h1>Redux Tool-kit - DeletePost on click</h1>
        <button onClick={()=>{DeletePost(101)}}>Delete Post</button> */}

        {/* <h1>Redux Tool-kit - CreatePost on click</h1>
        <button onClick={()=>{CreatePost(myData)}}>Create Post</button> */}

        <h1>Redux Tool-kit - UpdatePost on click</h1>
        <button onClick={()=>{UpdatePost(updatedData)}}>Update Post</button>
    </div>
  );
}

export default App;
