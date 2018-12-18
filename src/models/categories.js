import { defaultsDeep } from 'lodash/object';

export const get = async (id) => ({
    id,
    game: '1234',
    title,
    questions: [],
    _links: {
        self: `/categories/${id}`,
        games: `/games/1234`,
        questions: `/games/1234/categories/${id}/questions`
    }
});

export const getAll = async (id) => ([
    get('1234')
]);

export const create = async (gameId, title) => {
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
