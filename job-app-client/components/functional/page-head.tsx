import Head from 'next/head';
import { lightBlueBG, nextDivFullHeight } from '../../util/inline-styles';

export default function PageHead() {
    return (
        <Head>
            <title>Jaba</title>
            <link rel="icon" href="/favicon.ico" />
            <style>{lightBlueBG} {nextDivFullHeight}</style>
        </Head>
    )
}
