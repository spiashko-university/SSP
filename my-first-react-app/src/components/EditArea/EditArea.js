import React, {Component} from 'react';
import { FormControl, Checkbox, FormGroup } from 'react-bootstrap';
import './EditArea.css';
import {store} from '../../index';
import {changeEditable} from '../../actions/actions';
import {connect} from 'react-redux';

class EditArea extends Component {
  render() {
    const id = this.props.id;
    const text = this.props.text;
    const editable = this.props.editable;

    return (
        <div className="EditArea">

          <Checkbox className="text-right"
                    checked={editable}
                    onChange={() =>
                        store.dispatch(
                            changeEditable(
                                this.props.id,
                                this.props.editable))}>
            <span className="EditArea-edit-label">Edit</span>
          </Checkbox>

          <FormGroup controlId={id}>
            <FormControl className="EditArea-textarea"
                         componentClass="textarea"
                         readOnly={!editable}
                         defaultValue={text}
                         rows={20}/>
          </FormGroup>

        </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    editable: state.tabsReducer[ownProps.id],
  }
}

export default connect(mapStateToProps)(EditArea);

