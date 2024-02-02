import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

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

function NavBar() {
  const [list, setList] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function readData(path) {
      try {
        setLoading(true);
        console.log(".....");

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
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            Clever
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarID"
            aria-controls="navbarID"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarID">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </div>
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/favorite"
              >
                Favorite
                <span className="badge text-bg-warning">
                  {
                    convertData(list).filter((book) => book.favorite === true)
                      .length
                  }
                </span>
              </Link>
            </div>
            <Link className="btn bg-main text-white" to="/books">
              Create Your Book
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
