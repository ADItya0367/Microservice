import PostCreate from "./PostCreate";
import PostList from "./PostList";




function App() {
  return (
    <div className="container" style={{backgroundColor:'#343026', borderRadius:'10px',marginTop:'30px', }}>
     <h1 style={{color:'#ffffff'}}>Create Post !</h1>
     <PostCreate />
     <div style={{backgroundColor:'#ffffff', }}>
     <hr style={{marginTop:'20px'}}/>
     </div>
    
     <PostList/>
    </div>
  );
}

export default App;
