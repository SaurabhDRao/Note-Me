import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
import 'react-quill/dist/quill.snow.css';

import { debounce } from '../utils';

import { NoteContext } from "../contexts/NoteContext";

class Editor extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            title: "",
            id: ""
        }
    }

    static contextType = NoteContext;

    componentDidMount() {
        this.setState({
            text: this.context.selectedNote.body,
            title: this.context.selectedNote.title,
            id: this.context.selectedNote.id
        });
    }

    componentDidUpdate() {
        if(this.context.selectedNote.id !== this.state.id) {
            this.setState({
                text: this.context.selectedNote.body,
                title: this.context.selectedNote.title,
                id: this.context.selectedNote.id
            });
        }
    }

    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update();
    }
    
    update = debounce(() => {
        this.context.updateNote(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })
    }, 1500);

    updateTitle = async (title) => {
        await this.setState({ title });
        this.update();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className = { classes.editorContainer }>
                <BorderColorIcon className = { classes.editIcon }></BorderColorIcon>
                <TextField
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    variant="outlined"
                    label = "Note title"
                    value = { this.state.title }
                    fullWidth
                    onChange = { (e) => this.updateTitle(e.target.value) }
                />
                <ReactQuill
                    value = { this.state.text }
                    onChange = { this.updateBody } />
            </div>
        )
    }
}

export default withStyles(styles)(Editor);