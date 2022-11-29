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
    setBodyFat(
      getBodyFatPercentage(+age, +weight, +chestSkin, +abSkin, +thighSkin)
    )
    console.log(bodyFat)
  }, [age, weight, chestSkin, abSkin, thighSkin])

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
                onChange={(e) => setAge(e.target.value)}
              ></TextField>
              <Typography variant="h6" gutterBottom>
                WEIGHT
              </Typography>
              <TextField
                id="outlined-basic"
                label="pounds"
                variant="outlined"
                onChange={(e) => setWeight(e.target.value)}
              ></TextField>
              <Typography variant="h6" gutterBottom>
                CHEST
              </Typography>
              <TextField
                id="outlined-basic"
                label="mm"
                variant="outlined"
                onChange={(e) => setChestSkin(e.target.value)}
              ></TextField>
              <Typography variant="h6" gutterBottom>
                ABDOMINAL
              </Typography>
              <TextField
                id="outlined-basic"
                label="mm"
                variant="outlined"
                onChange={(e) => setAbSkin(e.target.value)}
              ></TextField>
              <Typography variant="h6" gutterBottom>
                THIGH
              </Typography>
              <TextField
                id="outlined-basic"
                label="mm"
                variant="outlined"
                onChange={(e) => setThighSkin(e.target.value)}
              ></TextField>
            </Box>
            <Box sx={{ p: 5 }}>
              <Typography align="center" variant="h5">
                Body Fat
              </Typography>
              <Typography align="center" variant="h6" gutterBottom>
                {bodyFat.bodyFat}%
              </Typography>
              <Typography align="center" variant="h5">
                Fat Mass
              </Typography>
              <Typography align="center" variant="h6" gutterBottom>
                {bodyFat.fatMass} lb
              </Typography>
              <Typography align="center" variant="h5">
                Lean Mass
              </Typography>
              <Typography align="center" variant="h6">
                {bodyFat.leanMass} lb
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  )
}

export default BodyFatView
