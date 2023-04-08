import Navbar from "./Navbar";
import Cards from "./Cards";

const Base = ({title = "Welcome to my WebApp", children}) => {
    return (
        <div className="container-fluid m-0 p-0">
            <Navbar/>

            <Cards/>
            {children}

            {/* <Footer/> */}
        </div>
    );
};

export  default Base;