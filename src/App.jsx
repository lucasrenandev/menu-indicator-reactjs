import { useEffect } from 'react';
import './App.css';

export default function App() {
  function activeLink() {
    const lists = document.querySelectorAll(".navigation .list");
    lists.forEach((list) => {
      list.classList.remove("active");
    });
    this.classList.add("active");
  }

  useEffect(() => {
    const lists = document.querySelectorAll(".navigation .list");
    lists.forEach((list) => {
      list.addEventListener("click", activeLink);
    });
  }, []);

  return (
    <>
      <section className='section'>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="list active">
              <a href="#" className="nav-link">
                <span className='icon'>
                  <i className='fa fa-home'></i>
                </span>
                <span className='text'>Home</span>
              </a>{/*End nav link*/}
            </li>{/*End list*/}
            <li className="list">
              <a href="#" className="nav-link">
                <span className='icon'>
                  <i className='fa fa-circle-info'></i>
                </span>
                <span className='text'>About</span>
              </a>{/*End nav link*/}
            </li>{/*End list*/}
            <li className="list">
              <a href="#" className="nav-link">
                <span className='icon'>
                  <i className='fa fa-gear'></i>
                </span>
                <span className='text'>Services</span>
              </a>{/*End nav link*/}
            </li>{/*End list*/}
            <li className="list">
              <a href="#" className="nav-link">
                <span className='icon'>
                  <i className='fa fa-folder'></i>
                </span>
                <span className='text'>Portfolio</span>
              </a>{/*End nav link*/}
            </li>{/*End list*/}
            <li className="list">
              <a href="#" className="nav-link">
                <span className='icon'>
                  <i className='fa fa-envelope'></i>
                </span>
                <span className='text'>Contact</span>
              </a>{/*End nav link*/}
            </li>{/*End list*/}
            <div className="indicator"></div>
          </ul>{/*End nav list*/}
        </nav>{/*End navigation*/}
      </section>{/*End section*/}
    </>
  )
}