export default {
    get: async (id) => ({
        name: 'Fake Name',
        categories: [],
        team1: {
            name: 'Red Team',
            score: 0
        },
        team2: {
            name: 'Green Team',
            score: 0
        },
        _links: {
            self: `/games/${id}`,
            categories: `/games/${id}/categories`
        }
    }),
    getAll: async () => ([
        { 
            id: '1234', 
            name: 'Fake Name',
            _links: {
                self: `/games/1234`
            }
        }
    ]),
    create: async (name) => ({
        id: '1234',
        name,
        _links: {
            self: `/games/1234`,
            categories: `/games/1234/categories`
        }
    }),
    update: async (id, {
        name,
        team1,
        team2
    }) => {
        const original = {
            name: 'Fake Name',
            categories: [],
            team1: {
                name: 'Red Team',
                score: 0
            },
            team2: {
                name: 'Green Team',
                score: 0
            },
        };

        return Object.assign(
            {},
            original,
            {
                name: name || original.name, 
                team1: team1 || original.team1, 
                team2 : team2 || original.team2
            },
        );
    },
    delete: () => {

    },
};
