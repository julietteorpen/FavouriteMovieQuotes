### My Favourite Movie Quotes

To run the project:
Clone the repo
Run 'npm install'
Make sure you have a Anroid or iOS simulator installed and then run 'npx expo start --ios' or `npx expo start --android`

Stack used in project:

- `Expo` - for cross-platform compatability, eas of desployment via EAS and easily incoporated additional libraries
- `Redux` / `Redux toolkit` - For universally accessable state object, redux toolkit allows for redux to be rapidly configured
- `redux-persist` - means that redux store remains when app is closed and reopened
- `ExpoFileSystemStorage` used as storage for redux-persist - chosen due to link to Expo ecosystem, ensures compatability

Aims of Project:

- [x] Allow the user to add a new movie quote to the app
- [x] Present the list of movie quotes the user has added, ordered by the users preference, with their favourite appearing at the top of the list
- [x] Display the movie quotes based on data persisted in the app and have the state persisted each time the order is changed.
- [x] Be functional across iOS and Android platforms
- [x] Be functional, whether on a small mobile phone or a large tablet device

### Potential Next Steps

To be expanded upon during discussion, but here are my potential next steps:

#### Authentication / authorisation,

- Set up a remote server and database to hold the users data. Add a log in flow to the app, so that after the user is logged in they can see their data from any device. This could be acheived through

#### Reordering quotes

- Rather than adding a numerical figure when entering a new quote, it would be fun if the user could drag and drop the quotes to reorder them.

#### Ensuring state remains the same across devices

- If app linked into a remote server and db, for example via a websockets package like socket.io , the redux actions could trigger a db request and or a db update. This means the quotes list and any other data could be stored in the db and this would keep the data in sync across devices.
