import React, { ReactElement, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Layout from '../../components/layout/Layout';

const Greet: React.FC = (): ReactElement => {
  const [name, setName] = useState('Tim');
  const [greeting, setGreeting] = useState('');

  const submit = async () => {
    const response = await axios.get(`/api/greet/${name}`);
    setGreeting(JSON.stringify(response.data, null, 2));
  };

  return (
    <Layout title="Greet API">
      <div className="container col-start-2 col-end-12">
        <h1>Greeting API</h1>
        <code className="inline-block mb-4">GET /api/greet/:name/:repeat</code>
        <form>
          <TextField
            id="nameToGreet"
            label="Enter a name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={submit}
          >
            Submit
          </Button>
        </form>
      </div>
      {greeting?.length > 0 && (
        <div className="container col-start-2 col-end-12">
          <code className="block">
            <pre>{greeting}</pre>
          </code>
        </div>
      )}
    </Layout>
  );
};

export default Greet;
