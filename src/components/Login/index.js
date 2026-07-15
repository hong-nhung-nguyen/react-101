function Login() {
    const isLogin = true;
    return(
        <>
            {isLogin     ? (<>
                    <div>User info, log out</div>
                </>) : (<>
                    <div>Login / Register</div>
            </>)}

            {isLogin && <div>Avatar</div>}
        </>

    )
}

export default Login;