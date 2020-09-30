import { useRouter } from 'next/router';
import PageHead from '../../../../components/organisms/page-head';

export default function JobsCompanyPostIdApply() {
    const router = useRouter();
    const { company, post_id } = router.query;

    return (
        <div>
            <PageHead />
            <div>
                Company: {company}, Post: {post_id}
            </div>
        </div>
    )
}
