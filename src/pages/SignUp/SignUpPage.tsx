import { LOG_IN } from '@/constants/routes'
import { Button, Grid, TextField, Typography, Box, Alert } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import validators from '@/helpers/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addAccount, getAccount } from '@/store/accounts/accountsSlice'

function SignUpPage() {
  type FormData = z.infer<typeof validators>
  const defaultValues = {
    name: '',
    email: '',
    password: '',
  }
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: zodResolver(validators),
    defaultValues,
  })

  const formValues = watch()
  const account = useAppSelector((state) => getAccount(state, formValues.email))
  const dispatch = useAppDispatch()
  const isAccountExist = !!account
  const navigate = useNavigate()

  const onSubmit = (data: FormData) => {
    if (isAccountExist) {
      return
    }

    dispatch(addAccount(data))
    return navigate('/')
  }

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        <Alert style={{ visibility: isAccountExist ? 'visible' : 'hidden' }} severity="warning">
          An account with this e-mail address already exists
        </Alert>
        <TextField
          margin="normal"
          required
          fullWidth
          label="User name"
          autoFocus
          defaultValue={defaultValues.name}
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          autoComplete="email"
          defaultValue={defaultValues.email}
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          autoComplete="password"
          defaultValue={defaultValues.password}
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
        <Grid container>
          <Grid item xl>
            <Link to={`/${LOG_IN}`}>{`Already have an account? Sign in`}</Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SignUpPage
