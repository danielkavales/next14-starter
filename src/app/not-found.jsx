import Link from "next/link"

const NotFound = () => {
    return(
        <div>
            <h2>Not Found</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <Link href="/"> Return Home</Link>
        </div>
    )
}

export default NotFound