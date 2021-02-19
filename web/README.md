[Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web [Firebase Hosting]

Set up a project directory:
Add your static assets to a local project directory, then run `firebase init` to connect the directory to a Firebase project.
In your local project directory, you can also set up Cloud Functions or Cloud Run for your dynamic content and microservices.

View, test, and share your changes before going live (optional):
Run `firebase emulators:start` to emulate Hosting and your backend project resources at a locally hosted URL.

To view and share your changes at a temporary preview URL, run `firebase hosting:channel:deploy` to create and deploy to a preview channel.
Set up the GitHub integration for easy iterations of your previewed content.

Deploy your site:
When things are looking good, run firebase deploy to upload the latest snapshot to our servers.
If you need to undo the deploy, you can roll back with just one click in the Firebase console.
