import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getLocationStore} from '../actions/user_actions';

class FormCard extends Component {

    constructor(props) {
        super(props);
        this.onDataRequest = this.onDataRequest.bind(this);
    }


    onDataRequest(event) {
        const formData = new FormData(event.target);
        const form = {};
        event.preventDefault();

        //array because in future fields might increase
        for (let entry of formData.entries()) {
            form[entry[0]] = entry[1];
        }

        //action dispatch
        this.props.onDataRequest(form);

    }

    render() {

        return (

                <div className="row">
                    <h3>Store Location</h3>
                    <p>Get your nearest store location</p>
                        <div className="section"></div>
                        <form onSubmit={this.onDataRequest}>
                            <div className="input-field">
                                <input name="location_name" id="location_name" type="text" className="validate" required />
                                <label htmlFor="location_name">Enter Location</label>
                            </div>
                            <button type="submit" className="btn-large blue">SUBMIT</button>
                        </form>
                        <div className="section"></div>
                        {this.props.storeName.length > 0 ? ("Store Location : "+this.props.storeName): ("") }
                </div>

        )
    }
}

const mapStateToProps = state => ({
    storeName: state.storeName
});
const mapActionsToProps = {
    onDataRequest: getLocationStore
};

export default connect(mapStateToProps, mapActionsToProps)(FormCard);
