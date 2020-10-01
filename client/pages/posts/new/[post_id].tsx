import { useRouter } from 'next/router';
import EditableJobPost from '../../../components/pages/editable-job-post';

function PostsNewPostId() {
    const router = useRouter();
    const { post_id } = router.query;

    return (
        <EditableJobPost
            postId={post_id}
        />
    )
}

// Hack to make sure we finish the post_id query before rendering the component
PostsNewPostId.getInitialProps = async () => {
    return {}
}

export default PostsNewPostId;
