const hexo = hexo || {};
const config = hexo.config;
const addlink = hexo.config.addlink;

// Jamling: addlink.domian is unnessary. use config.url to replace.

hexo.extend.filter.register('before_post_render', data => {
  if (!addlink || !config.url || data.layout !== 'post') {
    return data;
  }

  let domain = config.url;
  let beforeText = addlink.before_text || '';
  let afterText = addlink.after_text || '';
  let layout = data.layout;
  let href = `${domain}/${data.path}`;
  let hrefText = `${beforeText} [${href}](${href}) ${afterText}`;

  data.content += `\n\n${hrefText}`;
});
