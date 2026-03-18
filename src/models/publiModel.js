import {prisma} from '../helpers/dbConnection.js';

export const createPubli = async (publi) => {
    return await prisma.publi.create({
        data: publi
    })
}

export const getPublis = async () => {
    return await prisma.publi.findMany()
}

export const deletePubli = async (id) => {
    return await prisma.publi.delete({
        where: { id: parseInt(id) }
    })
}

export const updatePubli = async (id, data) => {
    return await prisma.publi.update({
        where: { id: parseInt(id) },
        data: data
    })
}

export const updateNamePubli = async (id, name) => {
    return await prisma.publi.update({
        where: { id: parseInt(id) },    
        data: { name }
    })
}

