var React = require('react');

var LoginField = React.createClass({
	render() {
		return (
            <div className="form-group">
                <label 
                    htmlFor={this.props.id}
                    className="col-sm-2 control-label"
                    >{this.props.label}</label>
                <div className="col-sm-10">
                    <input 
                        type={this.props.type}
                        className="form-control"
                        id={this.props.id}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                    />
                </div>
            </div>
		);
	}
});

module.exports = LoginField;

