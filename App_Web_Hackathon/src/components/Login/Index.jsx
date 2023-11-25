import { useState } from "react";
import "./login.css"

function login() {
    return(
        <>
             <div className="container">
        <main>
            <div className="img">
                <img src="./public/digitalCollege.png" alt=""/>
            </div>

            <div className="login">
                <div className="Email">
                    <input type="text" name="email" id="email" placeholder="Email"/>
                </div>

                <div className="senha">
                    <input type="password" name="senha" id="senha" placeholder="Senha"/>
                </div>

                <div className="btnEntrar">
                    <button type="submit">Entrar</button>
                </div>
            </div>

            dont havea account?
        </main>
    </div>
        </>
    )
}

export default login