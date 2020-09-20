import { useRouter } from 'next/router';
import JobPost from '../../components/pages/job-post';

export default function PreviewPost() {
    const router = useRouter();
    const { post_id } = router.query;

    return (
        <JobPost
            postId={post_id}
        />
    )
}
