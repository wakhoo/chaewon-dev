import Layout from "../components/Layout";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "../styles/globals.css"


export default function NameYouWant({Component,pageProps}){
    return (
        <Layout>
        <Component{...pageProps}/>
        <style jsx global>{`
        body{
            margin: 0;
            font-family: 'NeoDunggeunmo';
            background: #EBD98D;
            // background: linear-gradient(180deg, rgba(0,150,136,1) 0%, rgba(0,150,136,1) 15%, rgba(215,219,214,1) 15%, rgba(215,219,214,1) 130%);
            background-repeat: no-repeat;
            // display:flex;
            justify-content: center;
            align-items: center;
        }
        a{
            text-decoration: none;
            color: black;
        }
        @font-face {
            font-family: 'NeoDunggeunmo';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
        `}</style>
        </Layout>
        
        );
        
      
}