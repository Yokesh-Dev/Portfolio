import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p ><a href="https://blog-yokesh-devs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
              Visit My Blog
            </a></p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
                  <a href={socialImg.link} target="_blank" rel="noopener noreferrer">
        <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
      </a>


              
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Yokesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


//<img src={socialImg.imgPath} alt="social icon" />
