
const parceTitle = (title) => {
    const command = "-title"
    return title.slice(command.length);
}

const parceBody = (body) => {
    const command = "-body"
    return body.slice(command.length);
}

module.exports = {
    parceBody, parceTitle
}