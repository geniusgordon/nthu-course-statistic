var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var StatisticHeader = require('./statistic-header');

var StatisticTable = React.createClass({
    sortColumn(arr) {
        var which = this.state.sort.which;
        var order = this.state.sort.order;
        arr.sort((a, b) => {
            var x = a[which];
            var y = b[which];
            if (!isNaN(parseInt(x)) && !isNaN(parseInt(y))) {
                x = parseInt(x);
                y = parseInt(y);
            }
            if (x < y) 
                return -1 * order;
            if (x > y)
                return 1 * order;
            return 0;
        });
    },
    getStatistic(code) {
        this.setState({
            header: [],
            statistic: [],
            message: 'Loading...',
            sort: null
        });
        this._xhr = $.ajax({
            url: 'api/statistic/' + code,
            method: 'GET',
            success: function(data) {
                if (data.statistic.length > 0) {
                    this.setState({
                        header: data.header,
                        statistic: data.statistic,
                        message: ''
                    });
                } else {
                    this.setState({message: 'No result'});
                }
            }.bind(this),
            error: function() {
                this.setState({message: 'Error getting statistic'});
            }.bind(this)
        });
    },
    getInitialState() {
        return {
            header: [],
            statistic: [],
            message: 'Loading...'
        };
    },
    componentDidMount() {
        this.getStatistic(this.props.code);
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.code != this.props.code) {
            this.getStatistic(nextProps.code);
        }
    },
    componentWillUnmount() {
        if (this._xhr)
            this._xhr.abort();
    },
    onHeaderClick(ind, e) {
        var s = {which: ind};
        if (this.state.sort && this.state.sort.which == ind)
            s.order = this.state.sort.order * -1;
        else
            s.order = 1;
        this.setState({sort: s});
    },
    render() {
        var statistic = this.state.statistic;
        if (this.state.sort) {
            this.sortColumn(statistic);
        }
        var row = statistic.map((s) => {
            var col = s.map((c, i) => {
                return <td key={i}>{c}</td>;
            });
            return <tr key={s[0]}>{col}</tr>;
        });
        return (
            <div>
                <p>{this.state.message}</p>
                <table className="table table-hover">
                    <StatisticHeader 
                        sort={this.state.sort}
                        header={this.state.header}
                        onHeaderClick={this.onHeaderClick}
                    />
                    <tbody>{row}</tbody>
                </table>
            </div>
        );
    }
});

module.exports = StatisticTable;

function removeEnglish(s) {
    var ind = s.search(/[a-zA-z]/);
    if (ind == -1)
        return s;
    return s.slice(0, ind);
}

