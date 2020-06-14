import React from 'react';
import {Post} from './Post';

export default function Blog(props) {
    return (
        <div>
            {props.posts.map(function (post, i) {
                return <Post theme={props.theme} key={i} post={post} />;
            })}
        </div>
    );
}
