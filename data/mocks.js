const gqlTools = require('graphql-tools');
const casual = require('casual');

function createSession() {
    return {
        day: casual.integer(1, 2),
        title: casual.title,
        description: casual.sentences(4),
        slug: () => new gqlTools.MockList(5)
    };
}

export default {
    User: () => ({
        name: () => casual.name
    }),
    Session: createSession,
    RootQuery: () => ({
        schedule: () => new gqlTools.MockList(50, createSession)
    })
};
