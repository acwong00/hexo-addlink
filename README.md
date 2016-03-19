# hexo-addlink

**hexo-addlink** is an useful tool for adding current post link in hexo post page.

## Install

```bash
$ npm install hexo-addlink --save
```

## Usage

First add configuration in `_config.yml` from your hexo project.

```yaml
addlink:
  domain: yourdomain.com # the domain of your site
  before_text: hello # text before the post link
  after_text: bye # text after the post link
```

Run hexo command.

```bash
$ hexo clean && hexo g
```

## Demo

[acwong blog](http://blog.acwong.org)

## License

MIT