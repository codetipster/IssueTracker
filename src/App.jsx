const contentNode = document.getElementById('contents'); 

// first component

class IssueFilter extends React.Component{
    render(){
        return(
            <div>This is a placeholder for the issue filter.</div>
        );
    }
}



//Third Component

class IssueAdd extends React.Component {
    render(){
        return(
            <div>Placeholder for the issue add form</div>
        );
    }
}

// fourth component (gains access to parent properties with this.props)

class IssueRow extends React.Component {
    render(){
        const issue = this.props.issue;
        // const rowStyle = {border: "1px solid blue", padding: 4};
        return(
            
                <tr>
                    <td>{issue.id}</td>
                    <td>{issue.status}</td>
                    <td>{issue.owner}</td>
                    <td>{issue.created.toDateString()}</td>
                    <td>{issue.effort}</td>
                    <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
                    <td>{issue.title}</td>
                </tr>
            
        );
    }
}

// second component (takes in fourth component as child)

class IssueTable extends React.Component {
    render(){
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
        // const tableStyle = {border: "1px solid green", padding: 6};
        return(
            
                <table className="bordered-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Status</th>
                            <th>Owner</th>
                            <th>Created</th>
                            <th>Effort</th>
                            <th>Completion Date</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issueRows}
                        {/* < IssueRow issue_id={1} issue_title="Error in console when clicking add"/>
                        < IssueRow issue_id={2} issue_title="Reload feature console when clicking add"/> */}

                    </tbody>


                </table>
             
        );
    }
}

//Parent component that is eventually rendered in root node

// dynamic rendering

const issues = [
    {
        id: 1, status: 'Open', owner: 'Samuel', created: new Date('2021-04-29'),
         effort: 5, completionDate: undefined, title: 'Error in console when add is clicked'
    },

    {
        id: 2, status: 'open', owner: 'Katerina', created: new Date('2023-02-23'),
        effort: 3, completionDate: new Date('2024-01-2'), title: 'Erase AI memory from cache'
    },
];

class IssueList extends React.Component{
    render(){
        return(
            <div>
                <h1>Issue Tracker App</h1>
                <p>Track your Issues seemlessly..</p>
                <hr/>
                <br/>
                <IssueFilter />
                <hr/>
                <IssueTable issues={issues}/>
                <br/>
                <IssueAdd />
            </div>
        );
    }
}    // A simple JSX component as a class 

ReactDOM.render(<IssueList />,  contentNode);    //    Render the component inside   the content Node