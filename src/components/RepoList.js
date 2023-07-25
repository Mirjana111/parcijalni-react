import React from 'react';

function RepoList({ repos }) {
    return (
        <ul>
            {repos.map(repo => (
                <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default RepoList;
