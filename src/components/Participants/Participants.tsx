import { Box, Typography } from '@mui/material'

type TProps = {
  participants: string[]
}

function Participants({ participants }: TProps) {
  return (
    <Box>
      {participants?.map((item, index) => (
        <Typography component={'span'} key={index} variant="caption" color="inherit">
          {item}
          {index < participants.length - 1 && <>,</>}
        </Typography>
      ))}
    </Box>
  )
}

export default Participants
