import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection";


export default function Layout({children}){
    return(
        <>
            <HeaderSection/>
                {children}
            <FooterSection/>
        </>
    )
}