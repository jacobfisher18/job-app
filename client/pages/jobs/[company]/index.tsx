import { useRouter } from 'next/router';
import PageHead from '../../../components/organisms/page-head';

export default function JobsCompany() {
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
