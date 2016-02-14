var React = require('react');
var ReactDOM = require('react-dom');

var DepartmentSelect = require('./department-select');
var StatisticTable = require('./statistic-table');

var Statistic = React.createClass({
    getInitialState() {
        return {code: ''};
    },
    onDepartmentChange(d) {
        this.setState({code: d});
    },
    render() {
        var table = this.state.code.length > 0 ? 
            <StatisticTable code={this.state.code} /> : '';
        return (
            <div>
                <DepartmentSelect 
                    onChange={this.onDepartmentChange}
                />
                {table}
            </div>
        );
    }
});

ReactDOM.render(
    <Statistic />,
    document.getElementById('statistic')
);

