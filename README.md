# Getting Started with Shopping cart

It's simple app for using Redux library, hit fake api to get product data and view in product page to able to shopping and add product to cart.

cart page list products that added before and calculate total price, you can delete one of them.
In this app we using localStorage to save cart item, once you place order cart will empty.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Using bootstrapped

Using some components from react bootstrap like `Navbar` and `Card`.

### Build redux store

initialize `cartReducer` with different action:
 - `addToCart`
 - `deleteFromCart`
 - `clearCart`


