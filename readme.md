# BuyButton.js with custom attributes AND market support AND language support AND selling plan support (subscriptions)

~ This branch has code from from Innovation-Magic-LLC/buy-button-js-customattributes who added custom attributes ~

On top of that, this version can fetch product for specific market and show checkout related to a given market/language/price/currency.
I've added @inContext directive through a local version of buy button sdk 3.0 packaged with a custom graphql-js-client that support internationalizationDirective.

Thx to Innovation-Magic-LLC, this repository contains a modified version of the Shopify Buy Button library that allows developers to add custom attributes to product line items.

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

- Currency and custom Attributes are not automatically displayed in cart and product display. Modify the templates to display the proper currency.
- Ex: to add customAttributes after the title. with the class displaykey you can choose which attribuyte you would show or hide.

```
lineItem: {
    templates: {
        title:
        '<span class="{{data.classes.lineItem.itemTitle}}" data-element="lineItem.itemTitle">{{data.title}} {{#data.customAttributes.length}}-{{/data.customAttributes.length}} {{#data.customAttributes}} <span class="display{{key}}">{{value}}</span> {{/data.customAttributes}} </span>',
    }
}
```

- Thie version was created with a custom version of graphql-js-client and js-buy-sdk. I had to build those libs and add the index.es.js file manually.
- You need to create a custom developer App to get a storefrontAccessToken that can use the selling plan (subscriptions)

## Usage

```
git clone https://github.com/jadetr/buy-button-js.git
cd buy-button-js
yarn install
yarn build
cp dist/buybutton.* your-destination-folder
```

- This project is shared for educational purposes and is provided without warranty under the MIT license.
- Use and self-host at your own risk.
- To build and run the project, we recommend using a Linux environment.

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
