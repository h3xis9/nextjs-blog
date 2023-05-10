import Link from 'next/link';

/**
 * /posts/first-post
 * 
 * @returns 
 */
export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}