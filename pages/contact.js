import Link from "next/link"
import Seo from "../components/Seo"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faLinkedin,
    faGithubSquare
  } from "@fortawesome/free-brands-svg-icons";

export default function Contect(){
    return(
        <nav>
            <div className="box">
            <div className="profileBox">
            <Image className="profile"
            src="/images/profile.jpeg"
            width={200}
            height={200}
            />
            </div>
            <div>Hello!</div>
            <div className="free">
		Feel free to contact me 
            </div>
            <div>
                <Seo title="Contect"/>
                
                E-mail: 
                <Link href="mailto:tau7259@gmail.com"> tau7259@gmail.com</Link>
            </div>
            <ul >
        <li><Link href="https://github.com/wakhoo"><FontAwesomeIcon icon={faGithubSquare} /></Link></li>
        <li><Link href="https://www.linkedin.com/in/chaewon-jeon-457524178/"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
        <li><Link href="https://twitter.com/chaewon_dev"><FontAwesomeIcon icon={faTwitterSquare} /></Link></li>
        
        </ul>
        </div>
        <style jsx>{
            `
            nav{
                display: column;
            }
            ul{
                list-style: none;
                display: flex;
                padding: 0;
                justify-content: center;
            }
            ul li{
                padding: 8px 12px;
            }
            .box {
                width: 300px;
                height:370px;
                border-radius: 30px;
                overflow: hidden;
                margin: 100px auto;
                transition: all 0.3s cubic-bezier(0.42, 0.0, 0.58, 1.0);
                background-color: #D1DE99;
                display: column;
                padding:20px;
                text-align: center;
                line-height:35px;
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                transform: translateY(-10px);
              }
              .box:hover {
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                transform: translateY(-30px);
              }
              .profileBox {
                width: 100px;
                height: 100px; 
                border-radius: 100%;
                overflow: hidden;
                margin: 10px auto;
                border:3px solid #F5C125;
                box-shadow: 0 5px 5px rgba(0,0,0,0.25), 0 5px 10px rgba(0,0,0,0.22);
                //transform: translateY(-30px);
            }
            .smile{
                width:20px;
                height:20px;
                position: relative;
                top:5px;
                left:2px;
                padding: 2px 2px;
            }
            .free{
                display:flex;
                //text-align:center;
                justify-content: center;
            }
            `
        }

        </style>
        </nav>
        
    )
}
