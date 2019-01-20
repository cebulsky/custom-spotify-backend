import { merge } from 'lodash'
import { Model, Document } from 'mongoose'

export const controllers = {
    createOne(model: Model<Document>, body) {
        return model.create(body);
    },

    updateOne(docToUpdate: Document, update) {
        merge(docToUpdate, update);
        return docToUpdate.save();
    },

    deleteOne(docToDelete: Document) {
        return docToDelete.remove();
    },

    getOne(docToGet: Document) {
        return Promise.resolve(docToGet);
    },

    getAll(model: Model<Document>) {
        return model.find({});
    },

    findByParam(model: Model<Document>, id) {
        return model.findById(id);
    }
}

export const createOne = (model: Model<Document>) => (req, res, next) => {
    return controllers.createOne(model, req.body)
        .then(doc => res.status(201).json(doc))
        .catch(error => next(error))
}

export const updateOne = (model: Model<Document>) => async (req, res, next) => {
    const docToUpdate = req.docFromId;
    const update = req.body;

    return controllers.updateOne(docToUpdate, update)
        .then(doc => res.status(201).json(doc))
        .catch(error => next(error))
}

export const deleteOne = (model: Model<Document>) => (req, res, next) => {
    return controllers.deleteOne(req.docFromId)
        .then(doc => res.status(201).json(doc))
        .catch(error => next(error))
}

export const getOne = (model: Model<Document>) => (req, res, next) => {
    return controllers.getOne(req.docToUpdate)
        .then(doc => res.status(200).json(doc))
        .catch(error => next(error))
}

export const getAll = (model: Model<Document>) => (req, res, next) => {
    return controllers.getAll(model)
        .then(docs => res.json(docs))
        .catch(error => next(error))
}

export const findByParam = (model: Model<Document>) => (req, res, next, id) => {
    return controllers.findByParam(model, id)
        .then(doc => {
            if (!doc) {
                next(new Error('Not Found Error'));
            } else {
                req.docFromId = doc.id;
                next();
            }
        })
        .catch(error => {
            next(error);
        })
}


export const generateControllers = (model: Model<Document>, overrides = {}) => {
    const defaults = {
        findByParam: findByParam(model),
        getAll: getAll(model),
        getOne: getOne(model),
        deleteOne: deleteOne(model),
        updateOne: updateOne(model),
        createOne: createOne(model)
    }

    return { ...defaults, ...overrides }
}
