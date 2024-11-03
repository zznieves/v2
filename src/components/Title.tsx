// we must define the shape of the props Object
type titleProps = {
    titleName: string;
};

// Functional Component : displays a title + Header tag
export function Title(props: titleProps) {

    // return TSX/JSX to be rendered in the browser
    return (
        <h1>{props.titleName}</h1>
    );
}