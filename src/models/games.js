export default {
    get: async (id) => ({
        name: 'Fake Name',
        categories: [],
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
    edit: () => {

    },
    delete: () => {

    },
};
