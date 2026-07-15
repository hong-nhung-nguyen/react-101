import { FaAccessibleIcon } from "react-icons/fa";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";


function MainContent() {
    let name = "nhung";
    const css = {
        // color: "red",
        // backgroundColor: "blue"
    };
    return(
        <>
            <div className="box">
                <div className="test" style={css}>
                    Xin chao {name}!
                </div>
                <div className="test" style={css}>
                    Xin chao {name}!
                </div>

                <FaAccessibleIcon style={{fontSize: "50px"}} />
                <FaAmericanSignLanguageInterpreting className="icon" />


            </div>
        </>
    )
};

export default MainContent;