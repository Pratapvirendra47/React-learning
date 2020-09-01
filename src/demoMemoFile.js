import React from 'react';

function MemoFile(props) {
    console.log('rendering memo file', props)
    return (
        <div>
            Hello i am memo
        </div>
    )
}

export default React.memo(MemoFile);