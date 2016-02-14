var React = require('react');
var $ = require('jquery');

var DepartmentSelect = React.createClass({
    getInitialState() {
        return {departments: []};
    },
    componentDidMount() {
        $.ajax({
            url: 'api/department',
            method: 'GET',
            success: function(data) {
                this.setState({departments: data.departments});
            }.bind(this)
        });
    },
    onChange(e) {
        if (this.props.onChange)
            this.props.onChange(e.target.value);
    },
    render() {
        var options = this.state.departments.map((d) => {
            return <option key={d.code} value={d.code}>{d.name}</option>
        });
        return (
            <select className="form-control" onChange={this.onChange}>
                <option value="">--請選擇--</option>
                {options}
            </select>
        );
    }
});

module.exports = DepartmentSelect;

