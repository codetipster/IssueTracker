const contentNode = document.getElementById('contents');

// first component

class IssueFilter extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'This is a placeholder for the issue filter.'
        );
    }
}

//Third Component

class IssueAdd extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'Placeholder for the issue add form'
        );
    }
}

// fourth component (gains access to parent properties with this.props)

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        // const rowStyle = {border: "1px solid blue", padding: 4};
        return React.createElement(
            'tr',
            null,
            React.createElement(
                'td',
                null,
                issue.id
            ),
            React.createElement(
                'td',
                null,
                issue.status
            ),
            React.createElement(
                'td',
                null,
                issue.owner
            ),
            React.createElement(
                'td',
                null,
                issue.created.toDateString()
            ),
            React.createElement(
                'td',
                null,
                issue.effort
            ),
            React.createElement(
                'td',
                null,
                issue.completionDate ? issue.completionDate.toDateString() : ''
            ),
            React.createElement(
                'td',
                null,
                issue.title
            )
        );
    }
}

// second component (takes in fourth component as child)

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => React.createElement(IssueRow, { key: issue.id, issue: issue }));
        // const tableStyle = {border: "1px solid green", padding: 6};
        return React.createElement(
            'table',
            { className: 'bordered-table' },
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        null,
                        'Id'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Status'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Owner'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Created'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Effort'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Completion Date'
                    ),
                    React.createElement(
                        'th',
                        null,
                        'Title'
                    )
                )
            ),
            React.createElement(
                'tbody',
                null,
                issueRows
            )
        );
    }
}

//Parent component that is eventually rendered in root node

// dynamic rendering

const issues = [{
    id: 1, status: 'Open', owner: 'Samuel', created: new Date('2021-04-29'),
    effort: 5, completionDate: undefined, title: 'Error in console when add is clicked'
}, {
    id: 2, status: 'open', owner: 'Katerina', created: new Date('2023-02-23'),
    effort: 3, completionDate: new Date('2024-01-2'), title: 'Erase AI memory from cache'
}];

class IssueList extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Issue Tracker App'
            ),
            React.createElement(
                'p',
                null,
                'Track your Issues seemlessly..'
            ),
            React.createElement('hr', null),
            React.createElement('br', null),
            React.createElement(IssueFilter, null),
            React.createElement('hr', null),
            React.createElement(IssueTable, { issues: issues }),
            React.createElement('br', null),
            React.createElement(IssueAdd, null)
        );
    }
} // A simple JSX component as a class 

ReactDOM.render(React.createElement(IssueList, null), contentNode); //    Render the component inside   the content Node