import {useState} from 'react'
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';

function App() {

  const [book,setBook] = useState("");
  const [result,setResult] = useState([]);
  const [apikey,setApiKey] = useState("AIzaSyDWr7Csz1EE3Z6Rn3RJQ0qCsrVZ7zHw_n4");

 function handleChange(event){

  const book = event.target.value;

  setBook(book);

 }

 function handleSubmit(event){

  event.preventDefault();

  axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apikey+"&maxResults=40")
  .then(data => {
    console.log(data.data.items);
    setResult(data.data.items);
  })

 }
  return (
    <div class="container">
    <h1>Book Search App</h1>
     <form onSubmit={handleSubmit}>
       <div class="form-group">
         <input
         type="text" onChange={handleChange}
         className="form-control mt-10"
         placeholder="Search for Books"
         autoComplete="off"/>
       </div>
       <button type="submit" className="btn btn-danger">
       Search
       </button>
     </form>

     {result.map(book =>(
      <a href={book.volumeInfo.previewLink}>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
      </a>
     ))}

    </div>
  );
}

export default App;
