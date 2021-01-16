import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root:{
        fontFamily:"Poppins, sans-serif", 
        boxSizing: 'border-box',
        margin: 0, 
        padding: 0, 
    },
    main:{
        position: 'absolute', 
        right: 0, 
        width: '100%', 
        minHeight: '100vh',  
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        color:'#fff', 
        zIndex: '2', 
    }, 
    mainShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        minHeight: '100vh',   
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        zIndex: '2', 
    },
    header:{
        position: 'absolute', 
        top: 0, 
        width: '100%', 
        padding: '40px 0', 
        zIndex: 1000, 
        display: 'flex', 
        alignItems: 'center', 
        justifyItems: 'end', 
    }, 
    toggle:{
        width: '60px', 
        height: '60px', 
        size: '40px', 
        position: 'center', 
        cursor: 'pointer', 
    }, 
    title:{
        position: 'absolute',
        width: '471px',
        height: '77px',
        left: '40%',
        top: '161px',
        fontWeight: 600,
        fontSize: '72px',
        lineHeight: '108px',
        alignItems: 'center', 
        zIndex: 10, 
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#DBDFDF', 
        color: '#5C4A33', 
        
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    video:{
        position: 'absolute', 
        top: 0, 
        left: 0,
        right: 0,
        width: '100%', 
        height: '100%', 
        objectFit: 'cover', 
    }, 
    overlay:{
        position: 'absolute', 
        top: 0, 
        left: 0,
        width: '100%', 
        height: '100%', 
        background: 'rgba(0, 0, 0, 0.2)', 
    }, 
    text: {
        position: 'relative', 
        zIndex: 10, 
        marginTop: '60px',
        maxWidth: '790px',
        minWidth: '790px',
        textAlign: 'center', 
        left: '20%'
    }, 
    desc: {
        height: '20%',
        top: '40%',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '36px',
        textAlign: 'center',
    }, 
    button: {
        color: '#FFFFFF',
        border: '5px solid #FFFFFF',
        borderRadius: '10px',
        margin: '0 75px',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        },
        fontSize: '18px',
        padding: '15px 40px'
    }, 
    buttonGroup: {
        top: '504px',
        textAlign: 'center', 
        justifyContent: 'space-around', 
        alignContent: 'space-around',
        margin: '90px 0px'
    }, 
    side: {
        padding: '30px'
    }
}));

export default useStyles; 