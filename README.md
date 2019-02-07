# gettext-prado [![build status](https://secure.travis-ci.org/smhg/gettext-prado.png)](http://travis-ci.org/smhg/gettext-prado)

Extract translatable strings from [Prado](http://www.pradoframework.net) Localization Tags (i.e. `<%[string]%>`).

It can be used stand-alone or through [xgettext-template](https://github.com/gmarty/xgettext).

### How To
1. Install [xgettext-template](https://github.com/gmarty/xgettext):
```
npm i xgettext-template -g
```

1. Install [gettext-prado](https://github.com/epfl-idevelop/gettext-prado)
```
npm update gettext-prado -g
```

1. Run xgettext specifying the language:
```
xgettext-template --from-code utf-8 -L prado -o messages.pot
```

### Development

#### Install
```shell
git clone git@github.com:smhg/gettext-prado.git
npm i
```

#### Test
```shell
npm run lint
npm test
```
