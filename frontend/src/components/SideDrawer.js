import "./SideDrawer.css"

export const SideDrawer = ({ show }) => {

    const sideDrawerClass = ["sideDrawer"];

    if (show) sideDrawerClass.push("show")

    return (
        show && <div className={sideDrawerClass.join(" ")}></div>
    )
}