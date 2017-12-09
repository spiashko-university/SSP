import React, {Component} from 'react';
import { FormControl, Checkbox, FormGroup } from 'react-bootstrap';
import './EditArea.css';

class EditArea extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      editable: false,
    };
  }

  setEditable(e) {
    this.setState({ editable: e.target.checked });
  }

  render() {
    const id = this.props.id;
    const text = this.props.text;

    const readOnly = this.state.editable ? {}  : {'readOnly' : 'readOnly'};

    return (
        <div className="EditArea">
          <div className="text-right">
            <Checkbox onChange={this.setEditable.bind(this)}>Edit</Checkbox>
          </div>
          <FormGroup controlId={id}>
            <FormControl componentClass="textarea"
                         {...readOnly}
                         defaultValue={text}
                         rows={20}/>
          </FormGroup>
        </div>
    );
  }
}

export default EditArea;

