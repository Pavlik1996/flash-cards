import { Link } from 'react-router-dom'

import { Button } from './components/ui/button'

export function App() {
  return (
    <Button as={Link} to={'/home'}>
      Hello
    </Button>
  )
}
