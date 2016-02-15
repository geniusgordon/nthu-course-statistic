var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var StatisticHeader = React.createClass({
    onHeaderClick(ind) {
        this.props.onHeaderClick(ind);
    },
    onHeaderInputChange(ind, e) {
        this.props.onHeaderInputChange(ind, e.target.value);
    },
    render() {
        var header = this.props.header.map((h, i) => {
            var arrow = '';
            if (this.props.sort && this.props.sort.which == i) {
                var className = this.props.sort.order == 1 ? 
                    'glyphicon glyphicon-triangle-bottom' : 'glyphicon glyphicon-triangle-top'
                arrow = <span className={className} aria-hidden="true" />;
            }
            return (
                <th key={i} className="noselect" >
                    <div onClick={this.onHeaderClick.bind(this, i)}>
                        {removeEnglish(h)}{arrow}
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={this.onHeaderInputChange.bind(this, i)}
                        />
                        </div>
                </th>
            );
        });
        return <thead><tr>{header}</tr></thead>
    }
});

module.exports = StatisticHeader;

function removeEnglish(s) {
    var ind = s.search(/[a-zA-z]/);
    if (ind == -1)
        return s;
    return s.slice(0, ind);
}

