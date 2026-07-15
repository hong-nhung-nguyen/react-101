function Menu() {
    const arrayMenu = [
        "Homepage",
        "Products",
        "Blogs",
        "About",
        "Contact"
    ];
      
    return(
        <>
            <ul>
                {/* {arrayMenu.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })} */}

                {/* If use curly braclet => MUST HAVE RETURN */}

                {arrayMenu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Menu;