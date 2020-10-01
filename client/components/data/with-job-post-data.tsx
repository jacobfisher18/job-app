import React from 'react';
import { useState, useEffect } from 'react';
import { getJobPost } from '../../api/job-post';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

interface MyProps {
    postId: string | string[];
    children: React.ReactElement;
}

const override = css`
    text-align: center;
    margin-top: 200px;
`;

export default function WithJobPostData(props: MyProps) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        getJobPost(props.postId)
            .then(res => {
                setData(res);
                setLoading(false);
                setError(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            })
    }, []);

    return (
        <React.Fragment>
            {
                loading ?
                    <PulseLoader
                        css={override}
                        size={20}
                        color={"#222222"}
                        loading={true}
                    /> :
                    error ?
                        <div>error</div> :
                        React.cloneElement(props.children, { data })
            }
        </React.Fragment>
    )
}
