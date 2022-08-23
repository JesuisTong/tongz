import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
    <header className="bg-purple-700 mb-8">
        <div className="mx-auto min-w-full py-6 px-4">
            <h1 className="m-0">
                <Link className="underline text-white" to="/">
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
)

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
