import { AppBar, Toolbar, makeStyles } from "@material-ui/core"
import {Menu} from '@material-ui/icons'

const useStyles = makeStyles ({
    menu : {
        color : '#000'
    },
    header : {
        background: '#fff',
        height: 70
    },
    logo : {
        height : 50,
        margin: 'auto',
        paddingRight:70
    }
})

const Header = () => {
    const classes = useStyles()
    const url = 'https://inshorts.com/dist/images/home_page/logo.png'
    return (
       <AppBar className={classes.header}>
           <Toolbar>
               <Menu className={classes.menu}/>
               <img className={classes.logo} src={url} alt='logo'/>
           </Toolbar>
       </AppBar>
    )
}
export default Header