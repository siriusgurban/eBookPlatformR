// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCvgpngfod6RpetJJMjVWkv8c26Xx4BuBQ",
  authDomain: "ebookplatform-cd7cc.firebaseapp.com",
  projectId: "ebookplatform-cd7cc",
  storageBucket: "ebookplatform-cd7cc.appspot.com",
  messagingSenderId: "896905892543",
  appId: "1:896905892543:web:b9cdd2f3ed000f5fb32c0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

function Books() {
  function createData(path, data) {
    const newRef = push(ref(database, path), data);
    //   set(newRef, data);x/
    return newRef.key;
  }

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [favorite, setFavorite] = useState("");
  const [desc, setDesc] = useState("");
  const [inp1, setInp1] = useState("");
  const [bookData, setBookData] = useState([]);

  function handleClear(){
    setTitle("");
    setAuthor("");
    setImage("");
    setFavorite(false);
    setDesc("");
    console.log("cleared");
  }

  async function bookDataFn(inp) {
    try {
      let res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/?q={${inp}}`
      );
      let data = await res.json();
      console.log(data.items);
      return setBookData(data.items);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="position-relative">
        <img
          className="img-fluid w-100"
          src="https://www.eui.eu/Content-Types-Assets/Web-Unit/Student-in-law-library-section.x7622d211.jpg?w=1920&h=1080"
        />
        <div className="position-absolute top-0 left-0 w-100 h-100 bg-main-50 d-flex flex-column justify-content-center align-items-center gap-4">
          <h2 className="fw-bold display-2 text-light">
            Create your book for platform
          </h2>
        </div>
        <div className="d-flex flex-column gap-2 position-absolute top-50 start-0 w-100 mt-5">
          <label htmlFor="bookInp" className="form-label text-white fs-2">
            Search book
          </label>
          <input
          style={{width:"80%"}}
            className="form-control mx-auto"
            id="bookInp"
            onChange={(e) => {
              setInp1(e.target.value);
            }}
          />
          <ul
            className="list-group gap-1"
            style={{ overflowY: "scroll", height: "120px" }}
          >
            {/* {console.log(bookData, "bookData")} */}
            {bookData.map((item) => {
              return (
                <li
                style={{width:"78%"}}
                  key={item.id}
                  className="list-group-item  mx-auto"
                  role="button"
                  onMouseEnter={(e) => {
                    e.target.classList.add("active");
                  }}
                  onMouseLeave={(e) => {
                    e.target.classList.remove("active");
                  }}
                  onClick={()=>{
                    setAuthor(item.volumeInfo.authors)
                    setTitle(item.volumeInfo.title)
                    setImage(item.volumeInfo.imageLinks.thumbnail)
                    setDesc(item.volumeInfo.description)
                  }}
                >
                  {item.volumeInfo.authors} - {item.volumeInfo.title}
                </li>
              );
            })}
          </ul>
          <button
            className="btn btn-info w-25 mx-auto fs-4"
            onClick={() => bookDataFn(inp1)}
          >
            Search
          </button>
        </div>
        <div className="d-flex flex-column gap-1 position-absolute top-50 start-50"></div>
      </div>

      <main className="container">
        <form className="my-5">
          <div
            className="alert alert-danger bg-main-50 text-light d-none"
            role="alert"
          >
            A simple primary alert—check it out!
          </div>

          <div className="alert alert-danger d-none" role="alert">
            A simple primary alert—check it out!
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
            value={title}
              className="form-control"
              id="bookTitle"
              onChange={(event) => 
                setTitle(event.target.value)
                
              }
              
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Author
            </label>
            <input
            value={author}
              className="form-control"
              id="bookAuthor"
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Image url
            </label>
            <input
            value={image}
              className="form-control"
              id="bookUrl"
              onChange={(event) => setImage(event.target.value)}
            />
          </div>

          <div className="form-check mb-3 d-flex gap-3 align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="isFavorite"
              onChange={(event) => setFavorite(event.target.checked)}
            />
            <label className="form-check-label" htmlFor="isFavorite">
              is Favorite book?
            </label>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
            value={desc}
              className="form-control"
              id="bookDesc"
              rows="3"
              onChange={(event) => setDesc(event.target.value)}
            ></textarea>
          </div>

          <button
            className="btn bg-main btn-lg w-100 text-light mt-4"
            id="bookCrtBtn"
            onClick={(e) => {
              e.preventDefault();
              console.log("cliked", title);
              createData("books", { title, author, image, favorite, desc });
              handleClear();
            }}
          >
            Create
          </button>
        </form>
      </main>
    </>
  );
}

export default Books;
