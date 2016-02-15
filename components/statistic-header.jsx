var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var StatisticHeader = React.createClass({
    onHeaderClick(ind, e) {
        this.props.onHeaderClick(ind);
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
                <th 
                    key={i}
                    className="noselect"
                    onClick={this.onHeaderClick.bind(this, i)}
                >{removeEnglish(h)}{arrow}</th>
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

