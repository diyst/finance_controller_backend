class InvestimentType {
  public id: number
  public type: string
  public fields: Array<InvestimentField>
}

class InvestimentField {
  public name: string
  public type: string
}
