import logo from './logo.svg'
import './App.css'
import { useQuery } from '@apollo/client'
import { TokenQueryDocument } from '../.graphclient'

function App() {
  const result = useQuery(TokenQueryDocument, { variables: {token : "0x4466f4e0bf3441b2351a04f08402c45dd1e94444"}})

  const { data, loading, error, refetch } = result
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Graph Client with Apollo Example</p>
        <p>
          <button type="button" onClick={() => refetch()} disabled={loading}>
            Re Execute Query
          </button>
        </p>
        <p>{loading ? 'Loading...' : 'You can find the result below...'}</p>
        <fieldset>
          {data && (
            <form>
              <label>Data</label>
              <br />
              <textarea value={JSON.stringify(data, null, 2)} readOnly rows={25} />
            </form>
          )}
          {error && (
            <form>
              <label>Error</label>
              <br />
              <textarea value={JSON.stringify(error, null, 2)} readOnly rows={25} />
            </form>
          )}
        </fieldset>
      </header>
    </div>
  )
}

export default App
