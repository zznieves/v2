

// we need to define the shape of props (what properties do we expect it to have)
type NavBarProps = {
    data: { navBarName: string }[]
};

// Functional Component: Navbar
export function NavBar(props: NavBarProps) {

    // take the Array of navbar data and create hyperlinks

    // return TSX/JSX to be rendered in the web browser
    return (
        <div className="navBar">
            <ul className="navbar-links flexbox-container flexbox-row flexbox-x-space-between">
                {
                    props.data.map((item, index) => {
                        return (<li key={index}>
                                    <a href="#">
                                        <span>{`0${index+1}.`}</span>
                                        <span>{item.navBarName}</span>
                                    </a>
                                </li>)
                    })
                }
            </ul>
        </div>
    );
}