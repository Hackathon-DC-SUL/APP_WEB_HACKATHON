import { useState } from 'react'

function nav (){

    return (
        <>
            <nav>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    {/* <!-- Logo digital college --> */}
                    <img src="assets/digital_college.png"/>
                </div>
                {/* <!-- Barra de Busca --> */}
                <div className="col">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="col d-flex justify-content-end">
                    {/* <!-- DropDown de Mensagens --> */}
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-regular fa-envelope"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li><button className="dropdown-item" type="button">Action</button></li>
                          <li><button className="dropdown-item" type="button">Another action</button></li>
                          <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                      </div>
                      {/* <!-- DropDown de Notificações --> */}
                      <div className="dropdown ms-1">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-regular fa-bell"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li><button className="dropdown-item" type="button">Action</button></li>
                          <li><button className="dropdown-item" type="button">Another action</button></li>
                          <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                      </div>
                      {/* <!-- Modo Claro --> */}
                      <div className="dropdown ms-1">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Modo Claro
                        </button>
                        <ul className="dropdown-menu">
                          <li><button className="dropdown-item" type="button">Action</button></li>
                          <li><button className="dropdown-item" type="button">Another action</button></li>
                          <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                      </div>
                      {/* <!-- Usuario --> */}
                      <div className="dropdown ms-1">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-regular fa-user"></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li><button className="dropdown-item" type="button">Action</button></li>
                          <li><button className="dropdown-item" type="button">Another action</button></li>
                          <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                      </div>
                </div>
            </div>
        </div>
    </nav>
        </>
    )
}

export default nav