# gettext-prado [![build status](https://secure.travis-ci.org/smhg/gettext-prado.png)](http://travis-ci.org/smhg/gettext-prado)

Extract translatable strings from [Prado](http://www.pradoframework.net) Localization Tags (i.e. `<%[string]%>`).

It can be used stand-alone or through [xgettext-template](https://github.com/gmarty/xgettext).

### API

#### .parse(template)
Parses the `template` string for Handlebars expressions using the keywordspec.
It returns an object with this structure:
```javascript
{
  msgid1: {
    line: [1, 3]
  },
  msgid2: {
    line: [2],
    plural: 'msgid_plural'
  },
  context\u0004msgid2: {
    line: [4]
  }
}
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
