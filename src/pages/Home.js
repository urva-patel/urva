import React, {useRef, useState} from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import { Tooltip, IconButton } from "@material-ui/core";
import "../styles/Home.css";

function Home() {
  const email = 'Urvapatel1@gmail.com';
  const [isCopied, setIsCopied] = useState(false);
  const [emailText, setEmailText] = useState(email);


  const handleButtonClick = () => {
    // Create a temporary input element to copy the email to the clipboard
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setIsCopied(true);

    // Reset the copied state after a few seconds (optional)
    setTimeout(() => {
      setIsCopied(false);
      setEmailText("Urvapatel1@gmail.com")
    }, 1000);
  };

  const myRefBottom = useRef(null)

  const executeScrollTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth',
    });
  }

  const executeScrollBottom = () => myRefBottom.current.scrollIntoView({ behavior: 'smooth' })  

  return (
    <div className="home">
      <div className="about">
        <div className="aboutContent">
          <h2> Welcome to Urva's Professional Showcase.</h2>
          <div className="prompt">
            <p>A software developer with a passion for learning and creating.</p>
            <Tooltip title={emailText}><IconButton onClick={handleButtonClick}><EmailIcon /></IconButton></Tooltip>
            <IconButton href="https://www.linkedin.com/in/urva-patel-a0a25a113/"><LinkedInIcon /></IconButton>
            <IconButton href="https://github.com/urva-patel"><GithubIcon /></IconButton>
          </div>
          <span className={isCopied ? "notHidden" : "hidden"}>Copied Email!</span>
        </div>
        <div className="scrollDown" onClick={executeScrollBottom}>
          <ArrowDropDownCircleIcon />
        </div>
      </div>
      <div ref={myRefBottom} className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, JAX-RS, .NET, ExpressJS, GraphQL, MySQL, MongoDB, DynamoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, TypeScript</span>
          </li>
        </ol>
        <div className="scrollUp" onClick={executeScrollTop}>
          <ArrowDropDownCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default Home;
