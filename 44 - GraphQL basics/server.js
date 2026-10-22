import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const employees = [
    { id: "1", name: "Anu", role:"Developer" },
    { id: "2", name: "Bala", role: "Tester" },
    { id: "3", name: "Priya", role: "Designer" },
];

const typeDefs = `#graphql
    type Employee {
        id: ID!
        name: String!
        role: String!
    }

    type Query {
        employees: [Employee!]!
        employee(id: ID!): Employee
    }

    type Mutation {
        addEmployee(name: String!, role: String!): Employee!
    }
`;

const resolvers = {
    Query: {
        employees: () => employees,

        employee: (_, { id }) =>
            employees.find((emp) => emp.id === id) ?? null,
    },

    Mutation: {
        addEmployee: (_, { name, role }) => {
            const employee = {
                id: String(
                    Math.max(0, ...employees.map((emp) => Number(emp.id))) + 1
                ),
                name,
                role,
            };

            employees.push(employee);
            return employee;
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`Server ready at ${url}`);