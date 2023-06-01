export const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Tipos de perritos</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="..." aria-label="..."/>
                        <button className="btn btn-outline-danger" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </>
    )
  }