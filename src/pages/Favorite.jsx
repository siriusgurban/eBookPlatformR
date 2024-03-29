// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from '@fortawesome/free-solid-svg-icons'

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
  const [list, setList] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function readData(path) {
      try {
        setLoading(true);
        const dataRef = ref(database, path);
        setList(await get(dataRef).then((snapshot) => snapshot.val()));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    readData("books");
  }, []);

  console.log(list, "list");

  function convertData(d) {
    const newData = Object.entries(d);

    const myNewData = newData.map((kicikArr) => {
      const newObj = {
        id: kicikArr[0],
        ...kicikArr[1],
      };

      return newObj;
    });

    return myNewData;
  }

  return (
    <>
      <div className="position-relative">
        <img
          className="img-fluid w-100"
          src="https://cdn.outsideonline.com/wp-content/uploads/2021/12/best-books-2021_h.jpeg?crop=16:9&width=960&enable=upscale&quality=100"
        />
        <div className="position-absolute top-0 left-0 w-100 h-100 bg-main-50 d-flex flex-column justify-content-center align-items-center gap-4">
          <h2 className="fw-bold display-2 text-light">Your favorite boooks</h2>
        </div>
      </div>

      <main className="container">
        <section
          className="d-flex justify-content-around gap-4 flex-wrap my-5"
          id="booksSection"
        >
          {loading ? (
            <div className="d-flex justify-content-between w-100">
              <div>
                <Spinner />
              </div>
              <div>
                <Spinner />
              </div>
              <div>
                <Spinner />
              </div>
              <div>
                <Spinner />
              </div>
            </div>
          ) : (
            convertData(list)
              .filter((book) => book.favorite == true)
              .map((book, index) => {
                return (
                  <div
                    key={index}
                    className="card position-relative  my-3"
                    style={{ width: "23%" }}
                  >
                    <img
                      src={book.image}
                      className="card-img-top object-fit-cover zoom"
                      height="300"
                      alt={book.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">${book.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {book.author}
                      </h6>
                      <p className="card-text">{book.desc.slice(0,80)} ...</p>
                    </div>

                    <div className=" h2 position-absolute top-0 end-0">
                  <FontAwesomeIcon className={book.favorite ? "text-danger" : ""}  icon={faHeart} />
                  </div>
                  </div>
                );
              })
          )}
        </section>
      </main>
    </>
  );
}

export default Books;
