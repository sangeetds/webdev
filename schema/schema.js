const {
    GraphQLString,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean
} = require('graphql');
const lodash = require('lodash');

const todos = [
    {
        title: "Take out the trash",
        id: 34,
        completed: false,
        priority: 1
    },
    {
        title: "Dinner",
        id: 23,
        completed: false,
        priority: 4
    },
    {
        title: "Dog walk",
        id: 30,
        completed: false,
        priority: 2
    }
]

const Todos = new GraphQLObjectType( {
    name: 'Todo',
    fields: () => ({
        title: { type: GraphQLString },
        id: { type: GraphQLInt },
        completed: { type: GraphQLBoolean },
        priority: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType( {
    name: 'RootQuery',
    fields: ({
        todo: {
            type: Todos,
            args: { id: { type: GraphQLInt } },
            resolve: (parent, args) => {
                return todos.find((todo) => {
                    return todo.id === args.id
                });
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
});
