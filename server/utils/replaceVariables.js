function replaceVariables(html, data) {

  let result = html;

  for (let key in data) {

    const regex = new RegExp(`{{${key}}}`, "g");

    result = result.replace(regex, data[key]);

  }

  return result;
}

module.exports = replaceVariables;