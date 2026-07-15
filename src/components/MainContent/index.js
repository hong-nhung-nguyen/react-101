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
            </div>
        </>
    )
};

export default MainContent;