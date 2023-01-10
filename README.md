# Automated testing for "Best Friends" website

The scenarios for automated testing of the website http://opencart.qatestlab.net/index.php?route=common/home.


## Description

The scenarios were created for successful automated tesing of the website http://opencart.qatestlab.net/index.php?route=common/home. Using these scenarios you can successfully register new users, login, choose/buy/add to the cart/remove from the cart any products from the website. You can get the prices, compare them and convert to the needed currency.


## Getting Started
### Dependencies

Prerequisites: you need to install the following programs for start: 

* [VS Code](https://code.visualstudio.com/)
* [Node JS](https://nodejs.org/en/)
* [GIT](https://git-scm.com/downloads)


### Installing

* After installation of the programs mentioned in "Prerequisites", you need to run the following command in the terminal to install Codecept JS:
```
npx create-codeceptjs
```

* In order to check the successful performance of Codecept JS after installation, run the following command in the terminal:
```
npm run codeceptjs:demo
```


### Executing program

* In order to clone this code from the repository to your local machine, run the following git command:
```
git clone 'url you just copied'
```
where 'url you just copied' (is written without the quotation marks) - is the url to this repository. 


_The following commands below will help you to work with the present code:_

* In order to have the access to all components used in CodeceptJS, run the following command in the terminal:
```
npm i
```

* In order to run the particular scenario, use the following command in the terminal:
```
npx codeceptjs run --grep 'name-of-scenario'
```
where 'name-of-scenario' (is written without the quotation marks). 

* In order to stop the test of the scenario on the failed step, use the following command in the terminal:
```
npx codeceptjs run --grep 'name-of-scenario' -p pauseOnFail
```
where 'name-of-scenario' (is written without the quotation marks). 


## Help

* Find the detailed info about installation of CodeceptJS [here](https://codecept.io/quickstart/)

* Find the detailed info about codeceptjs-chai helper [here](https://www.npmjs.com/package/codeceptjs-chai)

* Find the detailed info about Data Driven Tests [here](https://codecept.io/advanced/#data-driven-tests)

* Find the detailed info about the method for reading the links from the file [here](https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/)

* Find the detailed info about plugins (e.g. "tryTo()) [here](https://codecept.io/plugins/#tryto)

* Find the detailed info about custom helpers [here](https://codecept.io/helpers/#extending-codeceptjs-with-custom-helpers)

* Find the detailed info about custom helpers [here](https://codecept.io/api/#api-testing)

* Find the detailed info about enabling HTML reports [here](https://codecept.io/reports/#html)

## Authors

[Kate Matlaha](https://m.facebook.com/people/Kate-Matlaha/100014554862733/)

## Version History

* 0.1
    * Initial Release for start

## License

This project is not licensed yet.



