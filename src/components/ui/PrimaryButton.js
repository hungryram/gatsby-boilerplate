import { Link } from "gatsby"
import * as React from "react"

export default function PrimaryButton({ className, link, text }) {
    return (
        <>
            <Link to={link} className={className}>{label}</Link>
        </>
    )
}