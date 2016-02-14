var React = require('react');
var ReactDOM = require('react-dom');

var DepartmentSelect = require('./department-select');

var Statistic = React.createClass({
    onDepartmentChange(d) {
    },
    render() {
        return (
            <div>
                <DepartmentSelect 
                    onChange={this.onDepartmentChange}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <Statistic />,
    document.getElementById('statistic')
);

