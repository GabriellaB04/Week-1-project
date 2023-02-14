const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString} = graphql;



const PokemonType = new GraphQLObjectType({
    name: "Pokemon",
    fields :() => ({
        //id: {type: GraphQLString },
        name: {type: GraphQLString},
        url: {type: GraphQLString },
        //type: {type: GraphQLString},
        //height: {type: GraphQLString}
    })
});

const RootQuery = GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        pokemon: {
            type: PokemonType,
            args:{ name: {type: GraphQLString}},
            resolve(parent,args){}
        }

    }
})