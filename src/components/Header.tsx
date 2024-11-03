import { NavBar } from "./NavBar";
import { Title } from "./Title";

// we must define the shape of the props (properties) we expect to be passed-in
type HeaderProps = {
    titleName: string;
    navBarData: {navBarName: string}[];
};

// Header (Functional Component)
// Nested Components: Title, NavBar
export function Header(props: HeaderProps) {

    // I need date to pass to my Title Component
    // I need date to pass to my NavBar Component

    // return TSX/JSX to be rendered in the web browser
    return (
        <div className="header flexbox-container flexbox-row flexbox-x-space-between flexbox-y-center">
            <Title  titleName={props.titleName} />
            <NavBar data={props.navBarData} />
        </div>
    );
}