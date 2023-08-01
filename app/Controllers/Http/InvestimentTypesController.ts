//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class InvestimentTypesController {
  public async index() {
    return [
      {
        id: 1,
        type: 'Criptomoedas',
      },
      {
        id: 2,
        type: 'Renda Fixa',
      },
      {
        id: 3,
        type: 'Ações',
      },
      {
        id: 4,
        type: 'Fundos Imobiliários',
      },
      {
        id: 5,
        type: 'Apostas',
      },
    ]
  }
}
