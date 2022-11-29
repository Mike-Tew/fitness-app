import { Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

const BodyFatView = () => {
  return (
    <>
      <Paper elevation={10}>
        <Box sx={{ p: 4 }}>
          <Typography align="center" variant="h4">
            Body Fat Calculator
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Box>
              <Typography variant="h6">AGE</Typography>
              <TextField
                id="outlined-basic"
                label="years"
                variant="outlined"
              ></TextField>
              <Typography variant="h6">WEIGHT</Typography>
              <TextField
                id="outlined-basic"
                label="pounds"
                variant="outlined"
              ></TextField>
              <Typography variant="h6">CHEST</Typography>
              <TextField
                id="outlined-basic"
                label="mm"
                variant="outlined"
              ></TextField>
              <Typography variant="h6">ABDOMINAL</Typography>
              <TextField
                id="outlined-basic"
                label="mm"
                variant="outlined"
              ></TextField>
              <Typography variant="h6">THIGH</Typography>
              <TextField
                id="outlined-basic"
                label="mm"
                variant="outlined"
              ></TextField>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  )
}

export default BodyFatView
