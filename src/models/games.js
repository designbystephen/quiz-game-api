import { defaultsDeep } from 'lodash/object';

export const get = async (id) => ({
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
});

export const getAll = async () => ([
    { 
        id: '1234', 
        name: 'Fake Name',
        _links: {
            self: `/games/1234`
        }
    }
]);

export const create = async (name) => {
    // id from object creation in database
    const id = '1234';

    // return db get
    const record = await get(id);

    // TODO: remove
    record.name = name;

    return record;
};

export const update = async (id, {
    name,
    team1,
    team2
}) => {
    // TODO: repalce with model.get
    const original = await get(id);

    return defaultsDeep(
        {
            name,
            team1,
            team2,
        },
        original,
    );
};

export const remove = async (id) => (
    id
);
