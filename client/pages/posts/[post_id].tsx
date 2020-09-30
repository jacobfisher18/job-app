import { useRouter } from 'next/router';

function PostsPostId() {
    const router = useRouter();
    const { post_id } = router.query;

    return (
        <div>
            {post_id}
        </div>
    )
}

// Hack to make sure we finish the post_id query before rendering the component
PostsPostId.getInitialProps = async () => {
    return {}
}

export default PostsPostId;
