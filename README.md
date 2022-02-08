### `Using the app`
To run the app, follow the below steps:
### `npm install`
1. Navigate into inside the app folder, 'notesapp'
2. In the folder, run the command "npm install"
3. This will install all the react dependecies
4. At the end a new folder, node_modules should be automatically created.

### `npm start`
1. After above step, run the command "npm start"
2. This will run the react scripts.
3. The server will automatically open the browser using localhost at port 3000
4. The app will only display the navigator or 404 error message.

To access the data. FOllow the step below.

### `json-server`
To access the data in data/db.json:
1. After running the npm install command
2. Open new terminal window and run the command `npx json-server --watch data/db.json --port 8000`
3. Run the npm start command and navigate to the localhost port 3000 url
