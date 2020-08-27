import React from 'react';

const RepoItem = ({repo}) => {
    return (
        <div className="repoItem">
            <h3>
                <a onClick={() => window.open(`${repo.html_url}`, "_blank")} href="#">{repo.name}</a>
            </h3>
        </div>
    );
};

export default RepoItem;
