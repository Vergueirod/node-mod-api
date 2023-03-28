import { Request, Response } from 'express';
import { json } from 'sequelize';
import { Phrase} from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor(Math.random() * 10);
    res.json({number: nRand});
};

export const name = (req: Request, res: Response) => {
    let nome: string = 'Diego';
    res.json({nome : nome});
};

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome;
    res.json({nome});
};

export const createPhrase = async (req: Request, res: Response) => {
    let {author, txt} = req.body;
    let newPhrase = await Phrase.create({ author, txt});
    res.json({id: newPhrase.id, author,txt});
};

export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();
    res.json({list});
};

export const getPhrases = async (req: Request, res: Response) => {
    //console.log(req.params);
    let { id } = req.params;
    let phrases = await Phrase.findByPk(id);

    if (phrases){
        res.json({ phrases });
    } else {
        res.json({ error: 'Frase não encontrada'});
    }
};

export const updatePhrases = async (req: Request, res: Response) => {
    let { id } = req.params; // Puxar o ID
    let {  author, txt } = req.body // Puxar os atributos que quero alterar

    let phrases = await Phrase.findByPk(id); // Pegar os dados do ID

    if( phrases ) {  // Validar se existe o id
        phrases.author = author; // Substituir author
        phrases.txt = txt; // Substituir txt
        await phrases.save(); // Salvar os novos dados

        res.json({ phrases }); // apresentar os novos dados

    } else { // Caso não tenha id
        res.json({ error: 'Frase não encontrada'}); // apresentar erro para o usuario
    }
};

export const deletePhrases = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Phrase.destroy({ where:{ id} });
    res.json({});
};
