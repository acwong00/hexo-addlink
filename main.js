const hexo = hexo || {};
const config = hexo.config;
const addlink = hexo.config.addlink;

hexo.extend.filter.register('before_post_render', data => {
  if (!addlink || !addlink.domain || data.layout !== 'post') {
    return data;
  }

  let domain = addlink.domain;
  let beforeText = addlink.before_text || '';
  let afterText = addlink.after_text || '';
  let layout = data.layout;
  let href = `http://${domain}/${data.path}`;
  let hrefText = `${beforeText} [${href}](${href}) ${afterText}`;

  data.content += `\n\n${hrefText}`;
});
