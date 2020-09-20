import { useRouter } from 'next/router';
import PageHead from '../../../components/functional/page-head';

export default function Post() {
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
