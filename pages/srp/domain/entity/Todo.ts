export class Todo {
  private _value: string = "";
  private _id: string = "";

  constructor(value: string, idGenerator: GenerateId) {
    if (value.length < 3)
      throw new Error("Todo must have at least 3 characters");
    if (value[0] !== value[0].toUpperCase())
      throw new Error("First letter should be uppercase");
    this._value = value;
    this._id = idGenerator.execute();
  }

  get value() {
    return this._value;
  }

  get id() {
    return this._id;
  }
}
