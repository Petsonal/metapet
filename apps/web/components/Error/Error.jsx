import React from 'react'

function Error() {
    return (<div className="flex justify-center">
        <div role="status" className="gap-2 flex flex-row">
            🚫
            <h5 className="text-lg text-semibold">Cannot connect to network...</h5>
        </div>
    </div>);
}

export default Error;