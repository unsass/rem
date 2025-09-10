export default {
    branches: [
        'main',
        '+([0-9])?(.{+([0-9]),x}).x',
        {
            'name': 'beta',
            'prerelease': true
        }
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                'preset': 'conventionalcommits',
                'releaseRules': [
                    {
                        'type': 'docs',
                        'scope': 'README',
                        'release': 'patch'
                    },
                    {
                        'type': 'refactor',
                        'release': 'patch'
                    },
                    {
                        'type': 'style',
                        'release': 'patch'
                    }
                ],
                'parserOpts': {
                    'noteKeywords': [
                        'BREAKING CHANGE',
                        'BREAKING CHANGES'
                    ]
                }
            }],
        [
            '@semantic-release/changelog',
            {
                'changelogTitle': '# Changelog\n\nAll notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.'
            }
        ],
        '@semantic-release/npm',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/git',
            {
                'message': 'chore(release): publish version ${nextRelease.version}'
            }
        ],
        '@semantic-release/github'
    ]
};
