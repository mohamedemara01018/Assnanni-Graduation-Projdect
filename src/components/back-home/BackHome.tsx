import { GoArrowLeft } from "react-icons/go"
import { NavLink } from "react-router"


function BackHome() {
    return (

        <NavLink to={'/'} className="flex gap-2 text-(--color-text) text-lg">
            <GoArrowLeft className="translate-y-1 text-xl font-extrabold font-sans text-(--color-text) " />
            <span>
                back to home
            </span>
        </NavLink>
    )
}

export default BackHome