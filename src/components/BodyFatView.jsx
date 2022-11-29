import { Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import getBodyFatPercentage from './getBodyFat'

const BodyFatView = () => {
  const [age, setAge] = useState(0)
  const [weight, setWeight] = useState(0)
  const [chestSkin, setChestSkin] = useState(0)
  const [abSkin, setAbSkin] = useState(0)
  const [thighSkin, setThighSkin] = useState(0)
  const [bodyFat, setBodyFat] = useState(0)

  useEffect(() => {
    let tttt = getBodyFatPercentage()
    console.log(tttt);
  })

  return (
    <>
      <Paper elevation={10}>
        <Box sx={{ p: 4 }}>
          <Typography align="center" variant="h4">
            Body Fat Calculator
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                AGE
              </Typography>
              <TextField
                id="outlined-basic"
                label="years"
                variant="outlined"
              ></TextField>
              <Typography variant="h6" gutterBottom>
                WEIGHT
              </Typography>
              <TextField
                id="outlined-basic"
                label="pounds"
                variant="outlined"
              ></TextField>
              <Typography variant="h6" gutterBottom>
                CHEST
              </Typography>
              <TextField
                id="outlined-basic"
                label="mm"
                variant="outlined"
              ></TextField>
              <Typography variant="h6" gutterBottom>
                ABDOMINAL
              </Typography>
              <TextField
                id="outlined-basic"
                label="mm"
                variant="outlined"
              ></TextField>
              <Typography variant="h6" gutterBottom>
                THIGH
              </Typography>
              <TextField
                id="outlined-basic"
                label="mm"
                variant="outlined"
              ></TextField>
            </Box>
            <Box sx={{ p: 5 }}>
              <Typography align="center" variant="h5">
                Body Fat
              </Typography>
              <Typography align="center" variant="h6" gutterBottom>
                --.-%
              </Typography>
              <Typography align="center" variant="h5">
                Lean Mass
              </Typography>
              <Typography align="center" variant="h6" gutterBottom>
                -- lb
              </Typography>
              <Typography align="center" variant="h5">
                Fat Mass
              </Typography>
              <Typography align="center" variant="h6">
                -- lb
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  )
}

export default BodyFatView
