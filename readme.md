# BuyButton.js with custom attributes AND market and language support

~ This branch has code from from Innovation-Magic-LLC/buy-button-js-customattributes who added custom attributes ~

On top of that, this version can fetch product for specific market and show checkout related to a given market/price/currency.
I've added @inContext directive through a local version of buy button sdk 3.0 packaged with a graphql-js-client that support internationalizationDirective.

This repository contains a modified version of the Shopify Buy Button library that allows developers to add custom attributes to product line items. While the default Buy Button library does not support this functionality, our implementation enables sending additional data from external applications to Shopify, facilitating the creation of custom retail functionality.

## Features

- Add custom attributes to product line items during checkout
- Attributes are visible to customers during the checkout process
- Attributes are accessible in the Shopify admin panel and through webhooks as metadata
- Display product price and cart line item price in the currency of a given market
- Display product name and variant name in the desired language

## Show product and cart in the currency and language for a given market

```
var countryCode = "FR";
var language = "fr";
var country_language = language+'-'+countryCode;
var client = await ShopifyBuy.buildClient({
    domain: "---.myshopify.com",
    storefrontAccessToken: "---",
    language: country_language,
});

client.graphQLClient.internationalizationDirective = "@inContext(country: "+countryCode+", language: "+language.toUpperCase()+")"

var localization = await client.shop.fetchLocalization().then(function (res) {
    return res;
});

var currencyCode = localization.country.currency.isoCode;

const localStorageCheckoutKey = `${client.config.storefrontAccessToken}.${client.config.domain}.checkoutId`;
var checkout = null;
if (localStorage.getItem(localStorageCheckoutKey)) {
    var checkoutId = localStorage.getItem(localStorageCheckoutKey);
    checkout = await client.checkout.fetch(checkoutId);
}

//checkout = null;
if (!checkout){
    checkout = await client.checkout.create(input);
    localStorage.setItem(localStorageCheckoutKey, checkout.id);
}
```

## Limitations

- Custom attributes are not displayed in the cart before checkout, which may cause confusion for customers with bulk orders. However, this should not be an issue for small orders.
- mocha test framework is purged
- After compiling the library, you will need to manually merge your bits with the live shopify bits. We have provided our compiled minified version in ./latest folder.
- For GraphQL cart API support, this version was built by modifying a compiled version of js-buy-sdk which is a work in progress: https://github.com/Shopify/js-buy-sdk/tree/sd-cart

## Usage

This project is shared for educational purposes and is provided without warranty under the MIT license.

Use and self-host at your own risk.

To build and run the project, we recommend using a Linux environment.

## Notes

For reference, we keep a copy of the code we compiled before and after merging it.

/dist-compiled/[date]/github-dist - this is the original github compiled dist
/dist-compiled/[date]/customattributes-dist - this is the updated code compiled dist
/dist-compiled/[date]/shopify-live - this is a reference copy of the live library hosted by shopify
/dist-compiled/[date]/release - this is the minified source

/latest - this is the latest minified source with custom attribute functionality.

# Prereqs :

1. Install [nvm](https://github.com/nvm-sh/nvm)
2. Install build essentials and python 2 `sudo apt-get install -y build-essential g++ python2`
3. Set project to use NodeJS 15 `nvm use 15`
4. Install yarn `npm install yarn -g`
5. Remove from package.json file 'wdio-mocha-framework' which contains the unsupported npm 'fibers' dependency. Its used for test automation.
6. Run `yarn install`
7. Run `yarn build`

Happy building!!!

# Original unmodified Readme:

## BuyButton.js

[BuyButton.js on NPM](https://www.npmjs.com/package/@shopify/buy-button-js)

BuyButton.js is a highly customizable UI library for adding e-commerce functionality to any website. It allows you to create interactive UI components such as product listings and shopping carts with minimal configuration, while allowing you to easily customize the appearance and behaviour of the components.
It uses the [JS Buy SDK](http://shopify.github.io/js-buy-sdk/) to connect to your Shopify store, giving you access to your products and collections.

To get started, take a look at [the documentation](http://shopify.github.io/buy-button-js/).
For questions, suggestions and feedback, please <a href="https://github.com/Shopify/buy-button-js/issues">create an issue</a>.

## BuyButton.js v3.0 troubleshooting

### Checkout showing Online Store password page

If your Online Store is password protected, users will be shown your Online Store password page when attempting to go to checkout. The best way to resolve this is to add [this redirect theme](https://github.com/instantcommerce/shopify-headless-theme) to your Online Store and remove password protection.

## Development

```
yarn
cp index.example.html index.html
```

- Add your API key and shop domain to index.html
- Set a product ID in index.html

```
yarn run start

```

Will watch for changes, compile src/ to tmp/ using babel & browserify, and run a server on port 8080.

## Testing

```
yarn run test
```

will run full test suite locally

```
yarn run test-dev
```

Will watch for changes and run test suite.

## Documentation

To run docs locally, install jekyll:

```
gem install jekyll
```

```
yarn run docs
```

Doc server will run at <http://localhost:4000/buy-button-js/>
Docs source files are located in /docs.
Docs are automatically deployed to gh-pages from main.
