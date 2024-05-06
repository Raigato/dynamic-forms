type TextField = {
  //TODO: Add properties
}

type SelectField = {
  //TODO: Add properties
}

type FormField = TextField | SelectField

export type FormData = {
  fields: FormField[]
}
