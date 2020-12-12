const todo = require('../model/todos');
const {
    GraphQLString,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const Todos = new GraphQLObjectType( {
    name: 'Todo',
    fields: () => ({
        title: { type: GraphQLString },
        _id: { type: GraphQLString },
        completed: { type: GraphQLBoolean },
        priority: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType( {
    name: 'RootQuery',
    fields: ({
        todo: {
            type: Todos,
            args: { id: { type: GraphQLString } },
            resolve: (parent, args) => {
                console.log(todo.findById(args._id));
                return todo.findById(args._id)
            }
        },
        todos: {
            type: GraphQLList(Todos),
            resolve: () => {
                return todo.find({})
            }
        }
    })
})

const Mutation = new GraphQLObjectType( {
    name: 'Mutation',
    fields: {
        addTodo: {
            type: Todos,
            args: {
                 title: { type: new GraphQLNonNull(GraphQLString) },
                 priority: { type: new GraphQLNonNull(GraphQLString) },
                 completed: { type: new GraphQLNonNull(GraphQLBoolean) }
            },
            resolve: (parent, args) => {
                const newTodo = new todo( {
                    title: args.title,
                    completed: args.completed,
                    priority: args.priority
                })
                console.log(newTodo);
                return newTodo.save();
            }
        },
        removeTodo: {
            type: Todos,
            args: {
                 id: { type: GraphQLString }
            },
            resolve: (parent, args) => {
                const todoRemove = todo.findById(args.id)
                console.log(todoRemove);
                todoRemove.deleteOne();
                return todoRemove;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
