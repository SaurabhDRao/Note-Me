const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	newNoteInput: {
		width: '100%',
		margin: '0px',
		height: '35px',
		outline: 'none',
		border: 'none',
		paddingLeft: '5px',
		'&:focus': {
		outline: '2px solid rgba(81, 203, 238, 1)'
		}
	},
	button: {
		width: "100%"
	},
	listItem: {
		cursor: 'pointer'
	},
	textSection: {
		maxWidth: '85%'
	},  
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	deleteIcon: {
		position: 'absolute',
		right: '5px',
		top: 'calc(50% - 15px)',
		'&:hover': {
		color: 'red'
		}
	}
});

export default styles;