import PageHead from '../functional/page-head';

interface MyProps {
    postId: string | string[] // TODO: why would the router return a string aray for a path param?
}

export default function JobApp(props: MyProps) {
    return (
        <div>
            <PageHead />
            <div>
                Post: {props.postId}
            </div>
        </div>
    )
}
