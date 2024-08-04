import { SIGN_UP } from '@/constants/routes'
import { Button, Grid, TextField, Typography, Box, Alert } from '@mui/material'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginValidators } from '@/helpers/validators'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getAccount } from '@/store/accounts/accountsSlice'
import { setUserState } from '@/store/user/userSlice'
import { useState } from 'react'

function SignInPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  type FormData = z.infer<typeof loginValidators>
  const defaultValues = {
    email: '',
    password: '',
  }
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
    resolver: zodResolver(loginValidators),
    defaultValues,
  })

  watch(() => setIsFormSubmitted(false))
  const formValues = watch()
  const account = useAppSelector((state) => getAccount(state, formValues.email))
  const dispatch = useAppDispatch()

  const onSubmit = ({ email }: FormData) => {
    if (account && account.password === formValues.password) {
      return dispatch(setUserState({ email, name: account.name }))
    }
    setIsFormSubmitted(true)
  }

  const alerts =
    !account && isFormSubmitted ? (
      <Alert
        style={{ visibility: !account && isFormSubmitted ? 'visible' : 'hidden' }}
        severity="warning">
        No registered account with this e-mail
      </Alert>
    ) : (
      <Alert
        style={{ visibility: isValid && account && isFormSubmitted ? 'visible' : 'hidden' }}
        severity="warning">
        Wrong password
      </Alert>
    )

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        {alerts}
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          autoComplete="email"
          autoFocus
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
          Sign In
        </Button>
        <Grid container>
          <Grid item xl>
            <Link to={`/${SIGN_UP}`}>{`Don't have an account?`}</Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default SignInPage
