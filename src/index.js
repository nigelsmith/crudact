var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var App = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Inside App</h1>
            </div>
        )
    }
});

var Crudact = React.createClass({
    getInitialState: function () {
        return {
            manifestLoaded: false
        };
    },
    componentDidMount: function () {
        setTimeout(function () {
            this.setState({
                manifestLoaded: true
            });
        }.bind(this), 3000);
    },
    getRoutes: function () {
        return (
            <Route name="app" handler={App} path="/"></Route>
        )
    },
    componentDidUpdate: function () {
        if (this.state.manifestLoaded) {
            Router.run(this.getRoutes(), function (Handler) {
                React.render(<Handler />, this.getDOMNode());
            }.bind(this));
        }
    },
    render: function () {
        if (!this.state.manifestLoaded) {
            return (
                <div><h1>Loading!</h1></div>
            )
        } else {
            return <div></div>;
        }
    }
});

module.exports = Crudact;