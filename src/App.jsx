import {
  Drawer,
  List,
  ListItem, Toolbar
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/system'
import './App.css'
import BodyFatView from './components/BodyFatView'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#141a28'
    }
  }
})
const drawerWidth = 150

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            sx: {
              width: drawerWidth,
              backgroundColor: '#2b3547'
            }
          }}
        >
          <Toolbar>
            <List>
              <ListItem>Body</ListItem>
            </List>
          </Toolbar>
        </Drawer>
        <Box
          component="main"
          sx={{
            display: 'flex',
            flexGrow: 1,
            p: 3,
            ml: `${drawerWidth}px`
          }}
        >
          <BodyFatView />
          {/* <BmiView /> */}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
