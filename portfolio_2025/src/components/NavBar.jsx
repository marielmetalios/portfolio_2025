const NavBar = ({links}) => {
    return (
        <nav>
            <div>
                <ul>
                    {links.map((link) => link)}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;