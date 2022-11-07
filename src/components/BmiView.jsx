import { Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { getBmi, getBmiText } from './calculateBmi'

const BmiView = () => {
  const [weight, setWeight] = useState(0)
  const [feet, setFeet] = useState(0)
  const [inches, setInches] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [bmiText, setBmiText] = useState(0)

  useEffect(() => {
    setBmi(getBmi(+weight, +feet, +inches))
    setBmiText(getBmiText(bmi))
  })

  return (
    <>
      <Paper elevation={10}>
        <Box sx={{ p: 4 }}>
          <Typography align="center" variant="h4">
            Body Mass Index (BMI)
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Box>
              <Box sx={{ pt: 4 }}>
                <Typography variant="h6">Weight</Typography>
                <TextField
                  id="outlined-basic"
                  label="Pounds"
                  variant="outlined"
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Box>
              <Box sx={{ pt: 2 }}>
                <Typography variant="h6">Height</Typography>
                <TextField
                  id="outlined-basic"
                  label="Feet"
                  variant="outlined"
                  onChange={(e) => setFeet(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Inches"
                  variant="outlined"
                  onChange={(e) => setInches(e.target.value)}
                />
              </Box>
            </Box>
            <Box sx={{ p: 5 }}>
              <Typography align="center" variant="h3">
                {bmi}
              </Typography>
              <Typography align="center" variant="h5">
                {bmiText}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  )
}

export default BmiView
