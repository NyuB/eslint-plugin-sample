# eslint-plugin-learn-plugin

Sample plugin to discover eslint

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-learn-plugin`:

```sh
npm install eslint-plugin-learn-plugin --save-dev
```

## Usage

Add `learn-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "learn-plugin"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "learn-plugin/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


