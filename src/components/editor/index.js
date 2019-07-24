import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import { debounce } from '../utils';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import 'react-quill/dist/quill.snow.css';

class Editor extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            title: "",
            id: ""
        }
    }

    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update();
    }

    update = debounce(() => {
        console.log("UPDATING DB");
    }, 1500);

    render() {
        const { classes } = this.props;

        return (
            <div className = { classes.editorContainer }>
                <ReactQuill
                    value = { this.state.text }
                    onChange = { this.updateBody } />
            </div>
        )
    }
}

export default withStyles(styles)(Editor);