import './App.css'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Button } from '@heroui/react'
import { ThemeProvider } from './context/ThemeContext'
import { WallpaperProvider } from './context/WallpaperContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <WallpaperProvider>
          <div>
            <h1 className='bg-amber-400 flex justify-center items-center text-3xl'>My App</h1>

            <header>
              <Show when="signed-out">
                <SignInButton mode='modal' />
                <SignUpButton mode='modal' />
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </header>
            <Button>
              My BTN
            </Button>

          </div>
        </WallpaperProvider>
      </ThemeProvider>
    </>
  )
}

export default App
