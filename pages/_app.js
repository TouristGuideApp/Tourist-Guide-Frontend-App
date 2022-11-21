import {appWithTranslation} from "next-i18next";
import * as React from "react";
import "animate.css/animate.min.css"
import {CookiesProvider} from "react-cookie";
import '/public/css/ErrorPage.css'
import '/public/css/Home.css'
import '/public/css/index.css'
import NavigationBar from "../components/navigationBar";



function MyApp({Component, pageProps}) {


    return (
        <>
            <CookiesProvider>
                <NavigationBar/>
                <Component {...pageProps} />
            </CookiesProvider>
        </>
    );
}


export default appWithTranslation(MyApp);
