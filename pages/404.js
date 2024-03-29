import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go();
            router.push('/');
        }, 3000);
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>Page Not Found</h2>
            <p>Go Back to <Link href="/" >HomePage</Link> </p>
        </div>
     );
}
 
export default NotFound;