import { useRouter } from 'next/router';
import PageHead from '../../../components/functional/page-head';

export default function Company() {

    const router = useRouter();
    const { company } = router.query;

    return (
        <div>
            <PageHead />
            <div>
                {company}
            </div>
        </div>
    )
}
