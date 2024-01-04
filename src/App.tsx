import { Route, Routes } from 'react-router'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'

import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
	<ChakraProvider>

    <main className='flex'>
		<Routes>

			{ /* public routes */}
			<Route element={<AuthLayout />}>
				<Route path='/sign-in' element={<SigninForm />} />
				<Route path='/sign-up' element={<SignupForm />} />
			</Route>

			{ /* private routes */}
			<Route element={<RootLayout />}>
				<Route index element={<Home/>} />
			</Route>
		</Routes>
	</main>
	</ChakraProvider>
  )
}

export default App
