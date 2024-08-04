import { TDay } from '@/types'
import { Grid, Paper } from '@mui/material'

export default function Day({ day }: TDay) {
  return (
    <Grid item sx={{ display: 'flex' }}>
      <Paper
        square
        sx={{
          p: 2,
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
        }}>
        {day.format('ddd')}, {day.format('DD')}
      </Paper>
    </Grid>
  )
}
