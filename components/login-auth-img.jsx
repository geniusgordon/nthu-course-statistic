var React = require('react');

var LoginAuthImg = React.createClass({
	render() {
        var url = 'api/login/auth-img?pwdstr=' + this.props.pwdstr;
        var img = this.props.pwdstr ? <img src={url} /> : '';
		return (
            <div className="form-group">
                <label 
                    htmlFor={this.props.id}
                    className="col-sm-2 control-label"
                    >{this.props.label}</label>
                <div className="col-sm-8 row">
                    <div className="col-sm-5">
                        <input 
                            type={this.props.type}
                            className="form-control"
                            id={this.props.id}
                            name={this.props.name}
                            placeholder={this.props.placeholder}
                        />
                    </div>
                    <div className="col-sm-5">
                        {img}
                    </div>
                </div>
            </div>
		);
	}
});

module.exports = LoginAuthImg;

