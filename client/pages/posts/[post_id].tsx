import { useRouter } from 'next/router';
import JobOverview from '../../components/pages/job-overview';
import WithJobPostData from '../../components/data/with-job-post-data';

function PostsPostId() {
    const router = useRouter();
    const { post_id } = router.query;

    return (
        <WithJobPostData postId={post_id}>
            <JobOverview />
        </WithJobPostData>
    )
}

// Hack to make sure we finish the post_id query before rendering the component
PostsPostId.getInitialProps = async () => {
    return {};
}

export default PostsPostId;
