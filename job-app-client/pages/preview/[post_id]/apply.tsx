import { useRouter } from 'next/router';
import PageHead from '../../../components/functional/page-head';

export default function PreviewApply() {
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
