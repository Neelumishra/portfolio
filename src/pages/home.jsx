import React from "react";
export default function Home(){
    return (
      <div className="contain dark:bg-gray-900 text-white">
        <div className="w-full flex  flex-col justify-center ">
          <h1 className="flex justify-center ">
            <div className="giggle">👋</div>Hi, I'm Neelu
          </h1>
          <h3 className="italic">
            To secure a challenging position as a{" "}
            <span >software engineer</span>, where I can
            utilize my expertise in React and frontend development to create
            visually captivating and user-friendly interfaces, while
            contributing to the growth and success of the organization.
          </h3>
        </div>
        <div className="socialButtons">
          <a
            href="mailto:neelumishra0397@gmail.com"
            target="_blank"
            tabindex="1"
            className="button b1"
          >
            <span className="tooltiptext">
              Connect
              <i className="fa-sharp fa-solid fa-arrow-up-right-from-square "></i>
            </span>
            <div className="placeholder">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </a>
          <a
            href="/NeeluUpdatedResume.pdf"
            target="_blank"
            tabindex="2"
            className="button b2"
          >
            <span className="tooltiptext">
              Resume
              <i className="fa-sharp fa-solid fa-arrow-up-right-from-square "></i>
            </span>
            <div className="placeholder">
              <i className="fa-solid fa-paperclip"></i>
            </div>
          </a>
          {/* <a
            href="https://danegalbraith.notion.site/Dane-s-Projects-53c4290f965c47d4960ff9d71f29e25e"
            target="_blank"
            tabindex="3"
            className="button b3"
          >
            <span className="tooltiptext">
              Projects
              <i className="fa-sharp fa-solid fa-arrow-up-right-from-square "></i>
            </span>
            <div className="placeholder">
              <i className="fa-solid fa-pen-ruler"></i>
            </div>
          </a> */}
          <a
            href="https://github.com/Neelumishra"
            target="_blank"
            tabindex="4"
            className="button b4"
          >
            <span className="tooltiptext">
              GitHub
              <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
            </span>
            <div className="placeholder">
              <i className="fa-brands fa-github"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/neelumishra/"
            target="_blank"
            tabindex="5"
            className="button b5"
          >
            <span className="tooltiptext">
              LinkedIn
              <i className="fa-sharp fa-solid fa-arrow-up-right-from-square "></i>
            </span>
            <div className="placeholder">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </a>
        </div>
        <div className="socialButtonsMobile">
          <div className="top">
            <a
              href="mailto:danegalbraith@gmail.com"
              target="_blank"
              tabindex="1"
              className="button"
            >
              <div className="placeholder">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </a>
            <a
              href="https://drive.google.com/file/d/1diYip7YODakU9sZ9BuoSvKXbvnguEgc6/view"
              target="_blank"
              tabindex="2"
              className="button"
            >
              <div className="placeholder">
                <i className="fa-solid fa-paperclip"></i>
              </div>
            </a>
          </div>
          <div className="bottom">
            <a
              href="https://danegalbraith.notion.site/Dane-s-Projects-53c4290f965c47d4960ff9d71f29e25e"
              tabindex="3"
              className="button"
            >
              <div className="placeholder">
                <i className="fa-solid fa-pen-ruler"></i>
              </div>
            </a>
            <a
              href="https://twitter.com/Danedude34"
              target="_blank"
              tabindex="4"
              className="button"
            >
              <div className="placeholder">
                <i className="fa-brands fa-twitter"></i>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/danegalbraith/"
              target="_blank"
              tabindex="5"
              className="button"
            >
              <div className="placeholder">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
}