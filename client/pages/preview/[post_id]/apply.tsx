import { useRouter } from 'next/router';
import PageHead from '../../../components/organisms/page-head';

export default function PreviewPostIdApply() {
    const router = useRouter();
    const { post_id } = router.query;

    return (
        <div>
            <PageHead />
            <div>
                Post: {post_id}
            </div>
        </div>
    )
}
