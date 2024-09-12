
import Navbar from '../../components/Navbar/Navbar';
import Servicos from '../../components/Servicos/Servicos';
import QuemSomos from "../../components/QuemSomos/QuemSomos";
import Diferencial from "../../components/Diferencial/Diferencial";
import Footer from "../../components/Footer/Footer";



export default function Home (){
    return(
        <>
        <Navbar />
        <Servicos />
        <QuemSomos />
        <Diferencial />
        <Footer />
        </>
    )
}