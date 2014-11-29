var React = require('react');

var Crudact = React.createClass({
    getInitialState: function () {
        return {
            appName: 'No name!'
        };
    },
    componentWillMount: function () {
        var manifest;

        if (this.props.manifest) {
            manifest = this.props.manifest;

            this.setState({
                appName: manifest.appName
            });
        }
    },
    render: function () {
        return (
            <div>{this.state.appName}</div>
        )
    }
});

module.exports = Crudact;